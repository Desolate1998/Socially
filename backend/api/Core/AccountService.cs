using api.Utils;
using DataAcces;
using Domain.Database;
using IdentityPackage.Models.Interfaces;
using IdentityPackage.Models.ValidationResults;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace api.Core
{
    public interface IAccountServices
    {
        public Task<UserRegistrationResult> RegisterAsync(DbUser user);
        public Task<UserLoginResult> LoginAsync(DbUser user);
    }

    public class AccountService : IAccountServices
    {
        private readonly DatabaseContext _database;
        private readonly ILogger<AccountService> _logger;
        private readonly IIdentityServiceManager<DbUser> _identity;
        private readonly IErrorHandler _errorConveyer;
        public AccountService(DatabaseContext databaseContext, ILogger<AccountService> logger, IIdentityServiceManager<DbUser> identity, IErrorHandler errorConveyer)
        {
            _database = databaseContext ?? throw new ArgumentException($"{nameof(databaseContext)} was null");
            _logger = logger ?? throw new ArgumentException($"{nameof(logger)} was null");
            _identity = identity ?? throw new ArgumentException($"{nameof(identity)} was null");
            _errorConveyer = errorConveyer ?? throw new ArgumentException($"{nameof(errorConveyer)} was null");

        }

        public async Task<UserLoginResult> LoginAsync(DbUser user)
        {
            try
            {
                var response = await _identity.SignIn(user);
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogInformation($"Exception occurred while trying log user in. Message:{ex.Message}");
                await _errorConveyer.ConveyError(ex.Message, exception: ex);
                throw;
            }
        }

        public async Task<UserRegistrationResult> RegisterAsync(DbUser user)
        {
            try
            {
                _logger.LogInformation("Checking if username is in use");
                if (await _database.Users.AnyAsync(x => x.Username == user.Username))
                {
                    _logger.LogInformation($"Username {user.Username} already in use");
                    return new UserRegistrationResult()
                    {
                        ErrorMessage = new List<FieldErrorMessage>()
                        {
                            new FieldErrorMessage()
                            {
                                ErrorMessages = new List<string>{"Username has already in use sorry :(" },
                                FieldName = "username"
                            }
                        },
                        IsSuccessful = false
                    };
                }
                else
                {
                    return await _identity.RegisterAsync(user);
                }
            }
            catch (Exception ex)
            {
                _logger.LogInformation($"Exception occurred while trying to register user. Message:{ex.Message}");
                await _errorConveyer.ConveyError(ex.Message, exception: ex);
                throw;
            }
        }
    }
}

using Application.Authentication.Common;
using Application.Common.Interfaces.Persistence;
using Application.Utils;
using Domain.Entities;
using IdentityPackage.Models.Interfaces;
using IdentityPackage.Models.ValidationResults;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Authentication.Commands.Register;

public class LoginCommandHandler : IRequestHandler<RegisterCommand, AuthenticationResponse>
{
    private readonly ILogger<LoginCommandHandler> _logger;
    private readonly IIdentityServiceManager<DbUser> _identity;
    private readonly IErrorHandler _errorConveyer;
    private readonly IUserRepository _userRepository;

    public LoginCommandHandler(ILogger<LoginCommandHandler> logger,
                                  IIdentityServiceManager<DbUser> identity,
                                  IErrorHandler errorConveyer,
                                  IUserRepository userRepository)
    {
        _logger = logger;
        _identity = identity;
        _errorConveyer = errorConveyer;
        _userRepository = userRepository;
    }

    public async Task<AuthenticationResponse> Handle(RegisterCommand command, CancellationToken cancellationToken)
    {
        try
        {
            if (await _userRepository.UsernameExists(command.User.Username))
            {
                _logger.LogInformation($"Username {command.User.Username} already in use");

                return new AuthenticationResponse(false, new List<FieldErrorMessage>()
                {
                    new FieldErrorMessage()
                    {
                        ErrorMessages = new List<string>{"Username has already in use sorry :(" },
                        FieldName = "username"
                    }
                });
            }
            else
            {
                var response = await _identity.RegisterAsync(command.User);
                return new AuthenticationResponse(response.IsSuccessful, ErrorMessages: response.ErrorMessage);
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

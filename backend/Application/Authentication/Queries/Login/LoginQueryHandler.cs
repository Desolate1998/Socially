using Application.Authentication.Common;
using Application.Common.Interfaces.Authentication;
using Application.Common.Interfaces.Persistence;
using Application.Utils;
using Domain.Entities;
using IdentityPackage.Models.Interfaces;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Authentication.Queries.Login;

public class LoginCommandHandler : IRequestHandler<LoginQuery, AuthenticationResponse>
{
    private readonly ILogger<LoginCommandHandler> _logger;
    private readonly IIdentityServiceManager<DbUser> _identity;
    private readonly IErrorHandler _errorConveyer;
    private readonly IJwtTokenGenerator _tokenGenerator;
    private readonly IUserRepository _userRepository;

    public LoginCommandHandler(ILogger<LoginCommandHandler> logger,
                                  IIdentityServiceManager<DbUser> identity,
                                  IErrorHandler errorConveyer,
                                  IJwtTokenGenerator tokenGenerator,
                                  IUserRepository userRepository)
    {
        _logger = logger;
        _identity = identity;
        _errorConveyer = errorConveyer;
        _tokenGenerator = tokenGenerator;
        _userRepository = userRepository;
    }

    public async Task<AuthenticationResponse> Handle(LoginQuery query, CancellationToken cancellationToken)
    {
        try
        {
            var response = await _identity.SignIn(query.User);
            if (response.IsSuccessful)
            {
                string jwtToken = "";
                jwtToken = _tokenGenerator.GetJwtToken(query.User);
                return new AuthenticationResponse(true,Token:jwtToken);
            }
            return new(false);
        }
        catch (Exception ex)
        {
            _logger.LogInformation($"Exception occurred while trying log user in. Message:{ex.Message}");
            await _errorConveyer.ConveyError(ex.Message, exception: ex);
            throw;
        }
    }
}

using Application.Authentication.Commands;
using Application.Authentication.Commands.Register;
using Application.Utils;
using Contracts.Authentication;
using Domain.Entities;
using IdentityPackage.Models.Attributes;
using IdentityPackage.Models.ValidationResults;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("Auth")]
[Authorized]
public class AuthenticationController : ControllerBase
{
    private readonly ILogger<AuthenticationController> _logger;
    private readonly ISender _mediator;

    public AuthenticationController(ILogger<AuthenticationController> logger, ISender mediator)
    {
        _logger = logger;
        _mediator = mediator;
    }

    [HttpPost("Register")]
    [Produces("application/json", Type = typeof(UserRegistrationResult))]
    [AllowUnauthorize]
    public async Task<IActionResult> Register(RegisterRequest request)
    {

        _logger.LogInformation($"Registration request received at [{DateTime.UtcNow}]");
        try
        {
            var command = new RegisterCommand(Mapper.Map<DbUser>(request));
            var results = await _mediator.Send(command);
            
            return Ok(results);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Exception occurred while trying to register user at [{DateTime.UtcNow}] message:{ex.Message}");
            return BadRequest("Registration request failed an internal server error occurred");
        }
    }

    [HttpPost("Login")]
    [Produces("application/json", Type = typeof(UserLoginResult))]
    [AllowUnauthorize]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        _logger.LogInformation($"Login request received at [{DateTime.UtcNow}]");
        try
        {
            //var response = await _authenticationQueryService.LoginAsync(Mapper.Map<DbUser>(request));
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Exception occurred while trying to log user in at [{DateTime.UtcNow}] message:{ex.Message}");
            return BadRequest("Registration request failed an internal server error occurred");
        }
    }
}

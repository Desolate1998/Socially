using api.Contracts;
using api.Core;
using api.Data_Transfer_Objects.Account;
using api.Utils;
using Azure;
using Domain.Database;
using Domain.Models.API;
using IdentityPackage.Models.Attributes;
using IdentityPackage.Models.ValidationResults;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
[Authorized]
public class AccountController : ControllerBase
{
    private readonly ILogger<AccountController> _logger;
    private readonly IAccountServices _accountServices;

    public AccountController(ILogger<AccountController> logger, IAccountServices accountServices)
    {
        _logger = logger ?? throw new ArgumentException($"{nameof(logger)} was null");
        _accountServices = accountServices ?? throw new ArgumentException($"{nameof(logger)} was null");
    }

    [HttpPost("Register")]
    [Produces("application/json", Type = typeof(APIResponse<UserRegistrationResult>))]
    [AllowUnauthorize]
    public async Task<IActionResult> Register(RegisterDTO request)
    {
        _logger.LogInformation($"Registration request received at [{DateTime.UtcNow}]");
        try
        {
            var response = await _accountServices.RegisterAsync(Mapper.Map<DbUser>(request));
            return Ok(new APIResponse<UserRegistrationResult>
            {
                IsSuccessful = true,
                Result =response
            });
        }
        catch (Exception ex)
        {
            _logger.LogError($"Exception occurred while trying to register user at [{DateTime.UtcNow}] message:{ex.Message}");
            
            return BadRequest(new APIResponse<UserRegistrationResult>
            {
                IsSuccessful = false,
                ErrorMessage = "An internal server error occurred"
            });
        }
    }


    [HttpPost("Login")]
    [Produces("application/json", Type = typeof(APIResponse<UserLoginResult>))]
    [AllowUnauthorize]
    public async Task<IActionResult> Login(LoginDTO request)
    {
        _logger.LogInformation($"Login request received at [{DateTime.UtcNow}]");
        try
        {
            var response = await _accountServices.LoginAsync(Mapper.Map<DbUser>(request));
            return Ok(new APIResponse<UserLoginResult>
            {
                IsSuccessful = true,
                Result = response
            });
        }
        catch (Exception ex)
        {
            _logger.LogError($"Exception occurred while trying to log user in at [{DateTime.UtcNow}] message:{ex.Message}");

            return BadRequest(new APIResponse<UserLoginResult>
            {
                IsSuccessful = false,
                ErrorMessage = "An internal server error occurred"
            });
        }
    }
}

using Domain.Models.API;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class HealthCheckController : Controller
    {
        private readonly ILogger<HealthCheckController> logger;

        public HealthCheckController(ILogger<HealthCheckController> logger)
        {
            this.logger = logger;
        }

        [HttpGet("Echo")]
        [Produces("application/json", Type = typeof(APIResponse<string>))]
        public IActionResult Echo()
        {
            logger.LogInformation($"Received echo request at {DateTime.UtcNow}");
            return Ok(new APIResponse<string>()
            {
                IsSuccessful = true,
                Result = "System Online"
            });
        }
    }
}

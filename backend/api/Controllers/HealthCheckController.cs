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
        [Produces("application/json", Type = typeof(string))]
        public IActionResult Echo()
        {
            logger.LogInformation($"Received echo request at {DateTime.UtcNow}");
            return Ok("System is online");
        }
    }
}

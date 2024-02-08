using DeviceMonitoring.Core.Models;
using DeviceMonitoring.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace DeviceMonitoring.Controllers
{
    [ApiController]
    [Route("Devices")]
    public class DevicesController : ControllerBase
    {
        private readonly IDbService _dbService;

        public DevicesController(IDbService DbService)
        {
            _dbService = DbService;
        }
        [HttpGet("Get")]
        public IActionResult Get()
        {
            return Ok(_dbService.Get<Device>().ToList());
        }

        [HttpPost("Add")]
        public IActionResult Add(Device device)
        {
            _dbService.Create<Device>(device);

            return Ok("Device added");
        }

        //[HttpPut("Update")]
        //public IEnumerable<Device> Update()
        //{
        //    return
        //}

        [HttpPut("Clear")]
        public IActionResult Remove()
        {
            _dbService.DeleteRange<Device>();

            return Ok();
        }
    }
}

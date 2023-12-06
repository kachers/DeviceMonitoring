using DeviceMonitoring.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace DeviceMonitoring.Controllers
{
    [ApiController]
    [Route("Devices")]
    public class DevicesController : ControllerBase
    {
        [HttpGet("Get")]
        public IEnumerable<Device> Get()
        {
            return
        }

        [HttpPost("Add")]
        public IEnumerable<Device> Add()
        {
            return
        }

        [HttpPut("Update")]
        public IEnumerable<Device> Update()
        {
            return
        }

        [HttpPut("Remove")]
        public IEnumerable<Device> Remove()
        {
            return
        }
    }
}

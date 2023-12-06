using DeviceMonitoring;
using DeviceMonitoring.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using DeviceMonitoring.Core.Models;

namespace DeviceMonitoring.Data
{
    public class DeviceMonitoringDbContext : DbContext, IDeviceMonitoringDbContext
    {
        public DeviceMonitoringDbContext(DbContextOptions<DeviceMonitoringDbContext> options) :
            base(options)
        {
        }

        public DbSet<Device> Devices { get; set; }
    }
}
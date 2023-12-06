using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore;
using DeviceMonitoring.Core.Models;
using System.Collections.Generic;

namespace DeviceMonitoring.Data
{
    public interface IDeviceMonitoringDbContext
    {
        public DbSet<Device> Devices { get; set; }
        int SaveChanges();
        DbSet<T> Set<T>() where T : class;
        EntityEntry<T> Entry<T>(T entity) where T : class;
    }
}
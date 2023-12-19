using DeviceMonitoring.Core.Models;
using DeviceMonitoring.Core.Services;
using DeviceMonitoring.Data;
using Microsoft.EntityFrameworkCore;

namespace DeviceMonitoring.Services
{
    public class DbService : IDbService

    {
    protected IDeviceMonitoringDbContext _context;

    public DbService(IDeviceMonitoringDbContext context)
    {
        _context = context;
    }

    public void Create<T>(T entity) where T : Entity
    {
        _context.Set<T>().Add(entity);
        _context.SaveChanges();
    }

    public void Update<T>(T entity) where T : Entity
    {
        _context.Entry(entity).State = EntityState.Modified;
        _context.SaveChanges();
    }

    public void Delete<T>(T entity) where T : Entity
    {
        _context.Set<T>().Remove(entity);
        _context.SaveChanges();
    }

    public IEnumerable<T> Get<T>() where T : Entity
    {
        return _context.Set<T>().ToList();
    }

    }
}

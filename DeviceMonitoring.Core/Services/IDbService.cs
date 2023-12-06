using DeviceMonitoring.Core.Models;

namespace DeviceMonitoring.Core.Services
{
    public interface IDbService
    {
        IEnumerable<T> Get<T>() where T : Entity;
        void Create<T>(T entity) where T : Entity;
        void Update<T>(T entity) where T : Entity;
        void Delete<T>(T entity) where T : Entity;
    }
}

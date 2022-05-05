using MongoDB.Driver;
using MyBudget.Domain;

namespace MyBudget.Persistence;

public interface IRepository<T>
    where T : DomainEntity
{
    public IMongoCollection<T> Collection { get; set; }

    Task Remove(string id);
    Task<List<T>> GetAll();
    Task<T> FirstById(string id);
    Task Add(T entity);
    Task AddRange(IEnumerable<T> entities);
    Task Update(T entity);
}
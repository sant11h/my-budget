using MongoDB.Bson;
using MongoDB.Driver;
using MyBudget.Domain;

namespace MyBudget.Persistence;

public class Repository<T> : IRepository<T>
    where T : DomainEntity
{
    private readonly MyBudgetContext _context;
    public IMongoCollection<T> Collection { get; set; }

    protected Repository(MyBudgetContext context)
    {
        _context = context;
        Collection = context.database.GetCollection<T>(typeof(T).Name);
    }

    public async Task Remove(string id)
    {
        var filter = Builders<T>.Filter.Eq(s => s.Id, new ObjectId(id));

        await Collection.DeleteOneAsync(filter);
    }

    public async Task<List<T>> GetAll()
    {
        return await Collection.FindAsync(new BsonDocument())
            .Result
            .ToListAsync();
    }

    public async Task<T?> FindById(string id)
    {
        return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id) } })
            .Result
            .FirstOrDefaultAsync();
    }

    public async Task Add(T entity)
    {
        await Collection.InsertOneAsync(entity);
    }

    public async Task AddRange(IEnumerable<T> entities)
    {
        await Collection.InsertManyAsync(entities);
    }

    public async Task Update(T entity)
    {
        var filter = Builders<T>.Filter
                                .Eq(e => e.Id, entity.Id);

        await Collection.ReplaceOneAsync(filter, entity);
    }
}
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace MyBudget.Persistence;

public class MyBudgetContext
{
    public readonly MongoClient client;
    public IMongoDatabase database;

    public MyBudgetContext(IOptions<MongoOptions> options)
    {
        client = new MongoClient(options.Value.ConnectionString);
        database = client.GetDatabase("MyBudget");
    }
}
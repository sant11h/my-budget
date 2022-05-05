using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyBudget.Domain;

public abstract class DomainEntity
{
    [BsonId]
    public ObjectId Id { get; set; }
}
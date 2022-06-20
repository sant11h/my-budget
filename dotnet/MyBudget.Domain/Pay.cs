using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MyBudget.Domain;

public class Pay : DomainEntity
{
    public decimal Amount { get; set; } 

    public DateTime Date { get; set; }
    
    public string? Detail { get; set; }
}
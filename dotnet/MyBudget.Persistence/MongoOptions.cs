namespace MyBudget.Persistence;

public class MongoOptions
{
    public const string Mongo = "Mongo";

    public string Database { get; set; } = null!;
    public string Host { get; set; } = null!;
    public int Port { get; set; }
    public string User { get; set; } = null!;
    public string Password { get; set; } = null!;
    
    public string ConnectionString 
    {
        get 
        {
            if (string.IsNullOrEmpty(User) || string.IsNullOrEmpty(Password))
                return $@"mongodb://{Host}:{Port}";
            return $@"mongodb://{User}:{Password}@{Host}:{Port}";
        }
    }
}
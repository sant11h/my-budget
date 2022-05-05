namespace MyBudget.Persistence;

public interface IUnitOfWork
{
    IPayRepository Pays { get; }
}
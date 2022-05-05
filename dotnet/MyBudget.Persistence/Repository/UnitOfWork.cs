namespace MyBudget.Persistence;

public class UnitOfWork : IUnitOfWork
{
    public IPayRepository Pays { get; }
    
    public UnitOfWork(MyBudgetContext context)
    {
        Pays = new PayRepository(context);
    }
}
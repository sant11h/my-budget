using MyBudget.Domain;

namespace MyBudget.Persistence;

public class PayRepository : Repository<Pay>, IPayRepository
{
    public PayRepository(MyBudgetContext context) : base(context)
    {
    }
}
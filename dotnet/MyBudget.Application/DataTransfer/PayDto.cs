namespace MyBudget.Application.DataTransfer;

public class PayDto
{
    public string? Id { get; set; }
    public decimal Amount { get; set; } 
    public DateTime Date { get; set; }
    public string? Detail { get; set; }
}
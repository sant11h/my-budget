using Microsoft.AspNetCore.Mvc;
using MyBudget.Persistence;

namespace MyBudget.Application.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PayController : Controller
{
    private readonly IUnitOfWork _unitOfWork;

    public PayController(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var pays = await _unitOfWork.Pays.GetAll();

        return Ok(pays);
    }
}
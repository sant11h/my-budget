﻿using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MyBudget.Application.DataTransfer;
using MyBudget.Domain;
using MyBudget.Persistence;

namespace MyBudget.Application.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PayController : Controller
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public PayController(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var pays = await _unitOfWork.Pays.GetAll();

        var payData = this._mapper.Map<IEnumerable<PayDto>>(pays);
        
        return Ok(payData);
    }

    [HttpPost]
    public async Task<IActionResult> CreatePay([FromBody] PayDto payDto)
    {
        var pay = new Pay()
        {
            Amount = payDto.Amount,
            Date = payDto.Date,
            Detail = payDto.Detail
        };

        await this._unitOfWork.Pays.Add(pay);
        
        return Created(nameof(GetPayById), _mapper.Map<PayDto>(pay));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPayById(string id)
    {
        var pay = await this._unitOfWork.Pays.FindById(id);
    
        if (pay is null)
        {
            return NotFound();
        }

        var payData = this._mapper.Map<PayDto>(pay);
        
        return Ok(payData);
    }
}
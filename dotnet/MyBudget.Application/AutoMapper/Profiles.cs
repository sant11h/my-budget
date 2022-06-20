using AutoMapper;
using MyBudget.Application.DataTransfer;
using MyBudget.Domain;

namespace MyBudget.Application.AutoMapper;

public class Profiles : Profile
{
    public Profiles()
    {
        this.CreateMap<Pay, PayDto>()
            .ForMember(dto => dto.Id, b => b.MapFrom(entity => entity.Id))
            .ForMember(dto => dto.Amount, b => b.MapFrom(entity => entity.Amount))
            .ForMember(dto => dto.Date, b => b.MapFrom(entity => entity.Date))
            .ForMember(dto => dto.Detail, b => b.MapFrom(entity => entity.Detail));
    }
}
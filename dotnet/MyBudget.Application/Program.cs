using MyBudget.Persistence;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddSwaggerGen();
builder.Services.AddControllersWithViews();

builder.Services.Configure<MongoOptions>(builder.Configuration.GetSection(MongoOptions.Mongo));

builder.Services.AddTransient<MyBudgetContext>();
builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

app.UseCors(options =>
{
    options.WithOrigins("http://localhost:4200");
    options.AllowAnyMethod();
    options.AllowAnyHeader();
});

app.UseRouting();
    
app.MapControllers();

app.Run();
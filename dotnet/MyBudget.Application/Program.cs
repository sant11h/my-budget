using MyBudget.Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://0.0.0.0:5000", "https://0.0.0.0:5001");

builder.Services.AddControllersWithViews();

builder.Services.Configure<MongoOptions>(builder.Configuration.GetSection(MongoOptions.Mongo));

builder.Services.AddTransient<MyBudgetContext>();
builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();

var app = builder.Build();

app.UseRouting();
    
app.MapControllers();
app.MapGet("/", () => "Hello World!");

app.Run();
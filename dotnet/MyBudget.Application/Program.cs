using System.Net;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://0.0.0.0:5000", "https://0.0.0.0:5001");
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
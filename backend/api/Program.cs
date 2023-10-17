using api.Middleware;
using Application;
using DataAcces;
using Domain.Entities;
using IdentityPackage.ApplicationExtensions;
using IdentityPackage.Builders;
using IdentityPackage.Models.Database;
using IdentityPackage.ServicesExtensions;
using Infrastructure;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddLogging();

builder.Services.AddDbContext<DatabaseContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("Master") ?? throw new NullReferenceException("Master connection string not found"));
});

builder.Services.AddIdentityServices<DbUser, DatabaseContext>(new IdentityDbOptions()
{
    LockOutUserEnabled = true,
    LockFailTimer = { 5, 10, 15 },
    LockoutAfter = 3,
    VerfiedUserLoginOnly = false,
    PasswordValidationRules = new PasswordValidationBuilder()
                             .MustHaveSpecialCharacter(true, "Must have atleast 1 special Character")
                             .MustHaveLowerCaseCharacter(true)
                             .HasMinLength(8)
                             .MustHaveUpperCaseCharacter(true)
                             .Build()

}, builder.Configuration["salt"]);


builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
    {
        policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .SetIsOriginAllowed(origin => true)
            .AllowCredentials();
    });
});

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");

app.UseMiddleware<ErrorHandlingMiddleware>();
app.UseHttpsRedirection();


app.MapControllers();
app.UseIdentityAuthorization();

app.Run();

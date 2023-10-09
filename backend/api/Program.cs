using api.Core;
using api.Utils;
using DataAcces;
using Domain.Database;
using IdentityPackage.ApplicationExtensions;
using IdentityPackage.Builders;
using IdentityPackage.Models.BuilderModels;
using IdentityPackage.Models.Database;
using IdentityPackage.ServicesExtensions;
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
    VerfiedUserLoginOnly = true,
    PasswordValidationRules = new PasswordValidationBuilder()
                             .MustHaveSpecialCharacter(true,"Must have atleast 1 special Character")
                             .MustHaveLowerCaseCharacter(true)
                             .HasMinLength(8)
                             .MustHaveUpperCaseCharacter(true)
                             .Build()

}, builder.Configuration["salt"]);

builder.Services.AddTokenServices(new IdentityTokenSetup()
{
    IssuerSigningKey = builder.Configuration["JWTKey"],
    ValidateLifetime = true
});
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
builder.Services.AddScoped<IErrorHandler, ErrorHandler>();
builder.Services.AddScoped<IAccountServices,AccountService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");
app.UseHttpsRedirection();


app.MapControllers();
app.UseIdentityAuthorization();

app.Run();

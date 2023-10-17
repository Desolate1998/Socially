using IdentityPackage.Models.BuilderModels;
using Infrastructure.Authentication.JwtTokenGenerator;
using Microsoft.Extensions.DependencyInjection;
using IdentityPackage.ServicesExtensions;
using Microsoft.Extensions.Configuration;
using Application.Common.Interfaces.Authentication;
using Application.Common.Interfaces.Persistence;
using Infrastructure.Persistence;

namespace Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddTokenServices(new IdentityTokenSetup()
        {
            IssuerSigningKey = configuration["JwtSettings:Secret"],
            ValidateLifetime = true
        });

        services.Configure<JwtSettings>(options=>
        {
            options.ExpiryMinute = int.Parse(configuration["JwtSettings:ExpiryMinutes"]?? throw new ArgumentException("JwtSettings:ExpiryMinutes cannot be null"));
            options.Issuer= configuration["JwtSettings:Issuer"] ?? throw new ArgumentException("JwtSettings:Issuer cannot be null");
            options.Audience= configuration["JwtSettings:Audience"] ?? throw new ArgumentException("JwtSettings:Audience cannot be null");
        });

        services.AddScoped<IUserRepository, UserRepository>();
        services.AddSingleton<IJwtTokenGenerator,JwtTokenGenerator>();
        return services;
    }
}
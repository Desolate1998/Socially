using Application.Utils;
using Microsoft.Extensions.DependencyInjection;
using MediatR;
using IdentityPackage.Models.ValidationResults;
using Application.Authentication.Commands.Register;
using FluentValidation;
using System.Reflection;
using Application.Common.Behaviors;

namespace Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IErrorHandler, ErrorHandler>();
        services.AddScoped(typeof(IPipelineBehavior<,>),typeof(ValidationBehavior<,>));
        services.AddValidatorsFromAssemblyContaining<RegisterCommandValidator>();
        services.AddMediatR(config => config.RegisterServicesFromAssemblyContaining(typeof(DependencyInjection)));
        return services;
    }
}
using Application.Authentication.Common;
using FluentValidation;
using IdentityPackage.Models.ValidationResults;
using MediatR;

namespace Application.Common.Behaviors;

public class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : IRequest<TResponse> where TResponse : AuthenticationResponse
{
    private readonly IValidator<TRequest>? _validator;

    public ValidationBehavior(IValidator<TRequest>? validator = null)
    {
        _validator = validator;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        if (_validator is null)
        {
            return await next();
        }

        var validatorResult = await _validator.ValidateAsync(request, cancellationToken);

        if (validatorResult.IsValid)
        {
            return await next();
        }

        return new AuthenticationResponse(false, validatorResult.Errors.Select(x => new FieldErrorMessage()
        {
            ErrorMessages = new List<string>() { x.ErrorMessage },
            FieldName = x.PropertyName
        }).ToList()) as TResponse?? throw new InvalidCastException($"Could not cast AuthenticationResponse to {typeof(TResponse)}");
    }
}

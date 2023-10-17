using Domain.Entities;
using IdentityPackage.Models.ValidationResults;

namespace Application.Authentication.Common;

public record AuthenticationResponse(
    bool Success,
    ICollection<FieldErrorMessage>? ErrorMessages = null,
    string? Token = null
    ) ;

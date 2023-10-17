using Application.Authentication.Common;
using Domain.Entities;
using IdentityPackage.Models.ValidationResults;
using MediatR;

namespace Application.Authentication.Commands.Register;



public record RegisterCommand(
  DbUser User
) : IRequest<AuthenticationResponse>;


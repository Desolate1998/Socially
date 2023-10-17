using Application.Authentication.Common;
using Domain.Entities;
using IdentityPackage.Models.ValidationResults;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Authentication.Queries.Login;

public record LoginQuery(
 DbUser User
) : IRequest<AuthenticationResponse>;

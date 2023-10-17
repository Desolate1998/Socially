using Application.Common.Interfaces.Authentication;
using Domain.Entities;
using IdentityPackage.Models.Interfaces;
using Microsoft.Extensions.Options;
using System.Security.Claims;

namespace Infrastructure.Authentication.JwtTokenGenerator;

internal class JwtTokenGenerator : IJwtTokenGenerator
{
    private readonly IIdentityTokenService _tokenServices;
    private readonly JwtSettings _jwtSettings;
    public JwtTokenGenerator(IIdentityTokenService tokenServices, IOptions<JwtSettings> jwtOptions)
    {
        _tokenServices = tokenServices ?? throw new ArgumentException($"{nameof(tokenServices)} cannot be null");
        _jwtSettings= jwtOptions.Value ?? throw new ArgumentException($"{nameof(jwtOptions)} cannot be null");
    }

    string IJwtTokenGenerator.GetJwtToken(DbUser user)
    {
        return _tokenServices.CreateToken(new List<Claim>() , _jwtSettings.Issuer, _jwtSettings.Audience, DateTime.UtcNow.AddMinutes(_jwtSettings.ExpiryMinute));
    }
}

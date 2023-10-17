using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Authentication.Commands.Register
{
    public class RegisterCommandValidator:AbstractValidator<RegisterCommand>
    {
        public RegisterCommandValidator() 
        { 
            RuleFor(x=>x.User.Email).NotEmpty().WithMessage("Email cannot be empty");        
            RuleFor(x=>x.User.Password).NotEmpty().WithMessage("Password cannot be empty");
            RuleFor(x=>x.User.Username).NotEmpty().WithMessage("username cannot be empty");
        }
    }
}

using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Common.Interfaces.Persistence;

public interface IUserRepository
{
    public Task<DbUser?> GetUserByEmail(string email);
    public Task<bool> UsernameExists(string username);
}

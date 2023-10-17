using Application.Common.Interfaces.Persistence;
using Domain.Entities;

namespace Infrastructure.Persistence;

internal class UserRepository : IUserRepository
{
    public UserRepository()
    {

    }

    public async Task<DbUser?> GetUserByEmail(string email)
    {
        throw new NotImplementedException();
    }

    public async Task<bool> UsernameExists(string username)
    {
        throw new NotImplementedException();
    }
}

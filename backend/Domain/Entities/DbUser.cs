using IdentityPackage.Models.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities;

public class DbUser : IdentityDbUser
{
    public Guid Uid { get; set; } = Guid.NewGuid();
    public string Username { get; set; }
}

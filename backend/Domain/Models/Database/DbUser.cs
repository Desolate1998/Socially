using IdentityPackage.Models.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Database
{
    public class DbUser:IdentityDbUser
    {
        public Guid Uid { get; set; }
        public string Username { get; set; }
    }
}
    
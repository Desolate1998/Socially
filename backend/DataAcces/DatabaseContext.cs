using IdentityPackage.Core;
using Domain.Database;
using Microsoft.EntityFrameworkCore;

namespace DataAcces;
public class DatabaseContext : IdentityDbContext<DbUser>
{
    public DatabaseContext(DbContextOptions options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.Entity<DbUser>(e =>
        {
            e.HasKey(p => p.Uid).IsClustered();
            e.Property(p=>p.Uid).IsRequired().HasColumnName("Uid");
            e.Property(p => p.Username).IsRequired().HasColumnName("Username");
        });
        base.OnModelCreating(mb);
    }
}

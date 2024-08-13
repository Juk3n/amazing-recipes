using api.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data.Contexts;

public class RecipeContext : DbContext
{
    public DbSet<Recipe> recipes { get; set; } = null!;

    public RecipeContext(DbContextOptions<RecipeContext> options) : base(options)
    {

    }


}
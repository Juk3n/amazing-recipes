using api.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data.Contexts;

public class RecipesContext : DbContext
{
    public DbSet<Recipe> Recipes { get; set; }

    public RecipesContext(DbContextOptions<RecipesContext> options) : base(options)
    {

    }


}
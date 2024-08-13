using api.Data.Contexts;
using api.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class RecipesController : ControllerBase
{
    private RecipesContext _context;

    public RecipesController(RecipesContext context) {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Recipe>>> GetAllRecipes() {
        return await _context.Recipes.ToListAsync();
    }

    [HttpGet("id")]
    public async Task<ActionResult<Recipe>> GetRecipe(string id) {
        var recipe = await _context.Recipes.FirstOrDefaultAsync(x => x.Id == id);
        if (recipe == null) {
            return NotFound();
        }
        return recipe;
    }

    [HttpPost]
    public async Task<IActionResult> AddRecipe(Recipe recipe) {
        await _context.Recipes.AddAsync(recipe);
        await _context.SaveChangesAsync();
        return NoContent();
    }

}
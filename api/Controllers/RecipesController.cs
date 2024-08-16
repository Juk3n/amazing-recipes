using System.Linq;
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

    [HttpGet("{id}")]
    public async Task<ActionResult<Recipe>> GetRecipe(string id) {
        var recipe = await _context.Recipes.FirstOrDefaultAsync(x => x.Id == id);
        if (recipe == null) {
            return NotFound();
        }
        return recipe;
    }

    [HttpPost]
    public async Task<IActionResult> AddRecipe(RecipeInput recipe) {
        var idHolder = await _context.Recipes.OrderBy(x => x.Id).LastOrDefaultAsync();
        var id = idHolder is null ? "1" : (int.Parse(idHolder.Id) + 1).ToString();

        var _recipe = new Recipe{
            Id = id,
            Name = recipe.Name,
            Ingredients = recipe.Ingredients,
            Steps = recipe.Steps
        };
        await _context.Recipes.AddAsync(_recipe);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateRecipe(string id, RecipeInput recipe) {
        var recipeToEdit = await _context.Recipes.FirstOrDefaultAsync(x => x.Id == id);
        if (recipeToEdit is null) {
            return NotFound();
        }
        recipeToEdit.Name = recipe.Name;
        recipeToEdit.Ingredients = recipe.Ingredients;
        recipeToEdit.Steps = recipeToEdit.Steps;
        _context.Update(recipeToEdit);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRecipe(string id) {
        var recipeToDelete = await _context.Recipes.FirstOrDefaultAsync(x => x.Id == id);
        if (recipeToDelete is null)
            return NotFound();
        
        _context.Remove(recipeToDelete);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
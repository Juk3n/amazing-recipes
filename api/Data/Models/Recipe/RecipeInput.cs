namespace api.Data.Models;

public class RecipeInput {
    public string? Name { get; set; }
    public List<string>? Ingredients { get; set; }
    public List<string>? Steps { get; set; }
}
namespace api.Data.Models;

public class Recipe {
    public string Id { get; set; }
    public string Name { get; set; }
    public List<string> Ingredients { get; set; }
    public List<string> Steps { get; set; }
}
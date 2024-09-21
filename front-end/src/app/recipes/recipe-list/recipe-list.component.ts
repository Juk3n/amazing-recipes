import { Component, inject, output } from '@angular/core';
import { RecipeComponent } from "../recipe/recipe.component";
import { Recipe } from '../recipe/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipesService = inject(RecipesService);
  selectedRecipe = output<Recipe>();
  recipes: Recipe[] = [];

  async ngOnInit() {
    this.recipesService.getAllRecipes().then((data) =>
    {
      this.recipes = data;
    });
  }

  onRecipeSelect(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }
}

import { Component, inject, input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  recipeData = input.required<Recipe>();
  recipesService = inject(RecipesService);

  onEditRecipe() {

  }

  async onDeleteRecipe() {
    await this.recipesService.deleteRecipe(this.recipeData().id);
  }
}

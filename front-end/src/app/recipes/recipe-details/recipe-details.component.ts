import { Component, inject, input, output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipesService } from '../recipes.service';
import { RecipeManageMode } from '../recipe-manage-bar/recipe-manage-bar.model';

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
  manageMode = output<RecipeManageMode>();
  
  onEditRecipe() {
    this.manageMode.emit(RecipeManageMode.Edit);
  }

  async onDeleteRecipe() {
    await this.recipesService.deleteRecipe(this.recipeData().id);
  }
}

import { Component } from '@angular/core';
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from './recipe/recipe.model';
import { RecipeManageBarComponent } from "./recipe-manage-bar/recipe-manage-bar.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipeManageMode } from './recipe-manage-bar/recipe-manage-bar.model';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeDetailsComponent, RecipeListComponent, RecipeManageBarComponent, AddRecipeComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  manageMode: RecipeManageMode = RecipeManageMode.View;
  currentRecipe?: Recipe;

  onRecipeSelect(selectedRecipe: Recipe) {
    this.currentRecipe = selectedRecipe;
  }

  onRecipeManageModeChange(manageMode: RecipeManageMode) {
    this.manageMode = manageMode;
  }

}

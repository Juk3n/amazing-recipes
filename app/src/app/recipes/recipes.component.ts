import { Component } from '@angular/core';
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from './recipe/recipe.model';
import { RecipeManageBarComponent } from "./recipe-manage-bar/recipe-manage-bar.component";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeDetailsComponent, RecipeListComponent, RecipeManageBarComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  currentRecipe?: Recipe;

  onRecipeSelect(selectedRecipe: Recipe) {
    this.currentRecipe = selectedRecipe;
  }

}

import { Component, input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  recipeData = input.required<Recipe>();

  onEditRecipe() {

  }

  onDeleteRecipe() {
    
  }
}

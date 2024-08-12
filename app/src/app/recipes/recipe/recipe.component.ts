import { Component, input, output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  select = output<Recipe>();
  recipeData = input.required<Recipe>();

  onClick() {
    this.select.emit(this.recipeData());
  }
}

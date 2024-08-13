import { Component, output } from '@angular/core';
import { RecipeComponent } from "../recipe/recipe.component";
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  selectedRecipe = output<Recipe>();
  recipes: Recipe[] = [];

  async ngOnInit() {
    const response = await fetch("http://localhost:5062/recipes");
    await response.json().then((data) =>
    {
      this.recipes = data;
      console.log(data);
    });
  }

  onRecipeSelect(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }
}

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
  recipes: Recipe[] = [
    {
      name: "Spaghetti", 
      ingredients: 
      [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3",
        "Ingredient 4"
      ], 
      steps: 
      [
        "Lorem ipsum odor amet, consectetuer adipiscing elit. \
          Himenaeos euismod integer feugiat vestibulum est malesuada orci suscipit hac. \
          Malesuada parturient taciti erat natoque sit gravida commodo.",
        "Cursus nostra varius etiam lobortis enim egestas rutrum. Blandit dictumst commodo aptent; ",
        "Lorem ipsum odor amet, consectetuer adipiscing elit. \
          Cursus nostra varius etiam lobortis enim egestas rutrum. Blandit dictumst commodo aptent \
          Malesuada parturient taciti erat natoque sit gravida commodo.",
      ]
    },
    {
      name: "Pizza Dough", 
      ingredients: 
      [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3",
        "Ingredient 4"
      ], 
      steps: 
      [
        "Lorem ipsum odor amet, consectetuer adipiscing elit. \
          Himenaeos euismod integer feugiat vestibulum est malesuada orci suscipit hac. \
          Malesuada parturient taciti erat natoque sit gravida commodo.",
        "Cursus nostra varius etiam lobortis enim egestas rutrum. Blandit dictumst commodo aptent; ",
        "Lorem ipsum odor amet, consectetuer adipiscing elit. \
          Cursus nostra varius etiam lobortis enim egestas rutrum. Blandit dictumst commodo aptent \
          Malesuada parturient taciti erat natoque sit gravida commodo.",
      ]
    },
    {
      name: "Pancakes", 
      ingredients: 
      [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3",
        "Ingredient 4"
      ], 
      steps: 
      [
        "Lorem ipsum odor amet, consectetuer adipiscing elit. \
          Himenaeos euismod integer feugiat vestibulum est malesuada orci suscipit hac. \
          Malesuada parturient taciti erat natoque sit gravida commodo.",
        "Cursus nostra varius etiam lobortis enim egestas rutrum. Blandit dictumst commodo aptent; ",
        "Lorem ipsum odor amet, consectetuer adipiscing elit. \
          Cursus nostra varius etiam lobortis enim egestas rutrum. Blandit dictumst commodo aptent \
          Malesuada parturient taciti erat natoque sit gravida commodo.",
      ]
    },
  ];

  onRecipeSelect(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }
}

import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {
  editedRecipe = input.required<Recipe>();
  recipesService = inject(RecipesService);
  enteredName = signal<string>('');
  enteredIngedients = signal<string[]>(['']);
  enteredSteps = signal<string[]>(['']);

  ngOnInit() {
    this.enteredName.set(this.editedRecipe().name);
    this.enteredIngedients.set(this.editedRecipe().ingredients);
    this.enteredSteps.set(this.editedRecipe().steps);
  }

  onSubmit() {
    let recipe = {
      id: this.editedRecipe().id,
      name: this.enteredName(),
      ingredients: this.enteredIngedients(),
      steps: this.enteredSteps()
    }
    this.recipesService.updateRecipe(recipe);
  }

  onAddIngredient() {
    this.enteredIngedients().push('');
  }

  onAddStep() {
    this.enteredSteps().push('');
  }
}

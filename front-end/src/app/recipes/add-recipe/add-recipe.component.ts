import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  recipesService = inject(RecipesService);

  enteredName = signal<string>('');
  enteredIngedients = signal<string[]>(['']);
  enteredSteps = signal<string[]>(['']);

  onSubmit() {
    let recipe = {
      id: "0",
      name: this.enteredName(),
      ingredients: this.enteredIngedients(),
      steps: this.enteredSteps()
    }
    this.recipesService.addRecipe(recipe);
  }

  onAddIngredient() {
    this.enteredIngedients().push('');
  }

  onAddStep() {
    this.enteredSteps().push('');
  }
}

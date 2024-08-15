import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {
  editedRecipe = input.required<Recipe>();
  enteredName = signal<string>('');
  enteredIngedients = signal<string[]>(['']);
  enteredSteps = signal<string[]>(['']);

  ngOnInit() {
    this.enteredName.set(this.editedRecipe().name);
    this.enteredIngedients.set(this.editedRecipe().ingredients);
    this.enteredSteps.set(this.editedRecipe().steps);
  }

  onSubmit() {

  }

  onAddIngredient() {
    this.enteredIngedients().push('');
  }

  onAddStep() {
    this.enteredSteps().push('');
  }
}

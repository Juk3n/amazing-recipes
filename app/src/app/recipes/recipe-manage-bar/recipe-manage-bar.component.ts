import { Component, output } from '@angular/core';
import { RecipeManageMode } from './recipe-manage-bar.model';

@Component({
  selector: 'app-recipe-manage-bar',
  standalone: true,
  imports: [],
  templateUrl: './recipe-manage-bar.component.html',
  styleUrl: './recipe-manage-bar.component.css'
})
export class RecipeManageBarComponent {
  manageMode = output<RecipeManageMode>();

  onShowRecipesClick() {
    this.manageMode.emit(RecipeManageMode.View);
  }

  onAddRecipeClick() {
    this.manageMode.emit(RecipeManageMode.Add);
  }
}

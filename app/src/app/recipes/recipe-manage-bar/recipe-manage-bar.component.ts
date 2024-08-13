import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-manage-bar',
  standalone: true,
  imports: [],
  templateUrl: './recipe-manage-bar.component.html',
  styleUrl: './recipe-manage-bar.component.css'
})
export class RecipeManageBarComponent {

  onShowRecipesClick() {
    console.log("Show Recipe List");
  }

  onAddRecipeClick() {
    console.log("Open Add Recipe Dialog");
  }
}

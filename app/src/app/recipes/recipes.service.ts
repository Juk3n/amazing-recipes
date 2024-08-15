import { Injectable } from "@angular/core";
import { Recipe } from "./recipe/recipe.model";

@Injectable({providedIn: "root"})
export class RecipesService {
    api: string = "http://localhost:5062/";

    async getAllRecipes() {
        const response = await fetch(this.api + "recipes");
        return await response.json();
    }

    async addRecipe(recipe: Recipe) {
        const response = await fetch(this.api + "recipes", {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json"
            }),
            body: JSON.stringify({
                name: recipe.name,
                ingredients: recipe.ingredients,
                steps: recipe.steps
            })
        });
        console.log(response);
    }

    async deleteRecipe(id: string) {
        const response = await fetch(this.api + "recipes/" + id, {
            method: 'DELETE'
        });
        console.log(response);
    }
}
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class RecipesService {
    api: string = "http://localhost:5062/";

    async getAllRecipes() {
        const response = await fetch(this.api + "recipes");
        return await response.json();
    }
}
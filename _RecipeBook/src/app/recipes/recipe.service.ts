import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Route } from "@angular/router";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { ServerService } from "../shared/server.service";

@Injectable()
export class RecipeService {
    constructor(
        private shoppingListService: ShoppingListService,
        private serverService: ServerService
    ) {}

    recipeSelected = new EventEmitter<Recipe>();

    estofadoIngredients: Ingredient[] = [
        new Ingredient("carne", 5),
        new Ingredient("caldo", 1)
    ];
    pastaIngredients: Ingredient[] = [
        new Ingredient("pasta", 15),
        new Ingredient("tomato", 10)
    ];

    recipes: Recipe[] = [
        new Recipe(
            0,
            "Estofado de carne",
            "Para tardes de invierno",
            "https://www.publicdomainpictures.net/pictures/70000/velka/beef-stew.jpg",
            this.estofadoIngredients
        ),
        new Recipe(
            1,
            "Pasta Carbonara",
            "Un clasico entre los clasicosw",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Spaghetti_alla_Carbonara_%28cropped%29.jpg/738px-Spaghetti_alla_Carbonara_%28cropped%29.jpg",
            this.pastaIngredients
        )
    ];

    recipesChanged = new Subject<Recipe[]>();

    addIngrecientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    saveRecipes() {
        return this.serverService.saveRecipes(this.recipes);
    }

    refreshRecipes() {
        this.serverService.getRecipes().subscribe(response => {
            //const recipes: Recipe[] = response;
            console.log(response);
            this.setRecipes(response);
        });
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        //let saveToDb = this.serverService.saveRecipes(this.recipes);
        // saveToDb.subscribe(response => {
        //     console.log(response);
        // });

        this.recipesChanged.next(this.recipes);
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        //this.serverService.saveRecipes(this.recipes);
        this.recipesChanged.next(this.recipes);
    }

    getRecipes() {
        this.refreshRecipes();
    }

    getRecipe(recipeId: number): Recipe {
        return this.recipes[recipeId];
    }

    deleteRecipe(recipeId: number) {
        this.recipes.splice(recipeId, 1);
        this.recipesChanged.next(this.recipes);
    }
}

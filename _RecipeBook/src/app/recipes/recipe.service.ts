import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) {}

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

    addIngrecientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(recipeId: number): Recipe {
        return this.recipes[recipeId];
    }
}

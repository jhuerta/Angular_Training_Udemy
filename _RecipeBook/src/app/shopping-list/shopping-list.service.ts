import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("oranges", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number): Ingredient {
    return this.ingredients[id];
  }

  editIngredient(id: number) {
    this.startedEditing.next(id);
  }

  updateIngredient(id: number, ingredient: Ingredient) {
    this.ingredients[id] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(ingredientId: number) {
    console.log("aaaaaaaaaadddddddddddd");
    console.log(ingredientId);
    this.ingredients.splice(ingredientId, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // THIS TRIGGERS MANY ELEMENT
    // for (let ingredient = ingredients.length - 1; ingredient >= 0; ingredient--) {
    //     this.addIngredient(ingredients[ingredient]);
    // }

    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<Ingredient>();
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("oranges", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  editIngredient(id: number) {
    this.startedEditing.next(this.ingredients[id]);
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

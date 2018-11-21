import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

import { NgForm } from "@angular/forms";
import { Subscripion } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService: ShoppingListService) {}

  @Output() new_ingredient_event = new EventEmitter<Ingredient>();

  @ViewChild("nameInput") ingredientName: ElementRef;
  @ViewChild("amountInput") ingredientAmount: ElementRef;

  @ViewChild("editShoppingForm") editShoppingForm: NgForm;
  startEditingSubscription: Subscripion;

  addIngredient() {
    const name = this.editShoppingForm.value.recipeName;
    const amount = this.editShoppingForm.value.amount;
    // const ingredient_name = this.ingredientName.nativeElement.value;
    // const ingredient_amount = this.ingredientAmount.nativeElement.value;

    const ingredient_name = name;
    const ingredient_amount = amount;
    const newIngredient = new Ingredient(ingredient_name, ingredient_amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.startEditingSubscription.unsubscribe();
  }

  ngOnInit() {
    this.startEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (ingredient: Ingredient) => {
        this.editShoppingForm.form.setValue({
          recipeName: ingredient.name,
          amount: ingredient.amount
        });
      }
    );
  }
}

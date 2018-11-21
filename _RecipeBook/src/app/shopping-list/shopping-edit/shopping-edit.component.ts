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
  editingMode: boolean = false;

  addOrUpdateIngredient() {
    const ingredient_name = this.editShoppingForm.value.recipeName;
    const ingredient_amount = this.editShoppingForm.value.amount;
    const ingredient_id = this.editShoppingForm.value.ingredientId;
    // const ingredient_name = this.ingredientName.nativeElement.value;
    // const ingredient_amount = this.ingredientAmount.nativeElement.value;

    const newIngredient = new Ingredient(ingredient_name, ingredient_amount);
    if (this.editingMode) {
      this.shoppingListService.updateIngredient(ingredient_id, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
  }

  ngOnDestroy() {
    this.startEditingSubscription.unsubscribe();
  }

  onResetForm() {
    this.editShoppingForm.reset();
    this.editingMode = false;
  }

  onDeleteItem() {
    console.log("eeee");
    const ingredient_id = this.editShoppingForm.value.ingredientId;
    this.shoppingListService.deleteIngredient(ingredient_id);
  }

  ngOnInit() {
    this.startEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (ingredientId: number) => {
        this.editingMode = true;
        const thisIngredient = this.shoppingListService.getIngredient(
          ingredientId
        );
        this.editShoppingForm.form.setValue({
          recipeName: thisIngredient.name,
          amount: thisIngredient.amount,
          ingredientId: ingredientId
        });
      }
    );
  }
}

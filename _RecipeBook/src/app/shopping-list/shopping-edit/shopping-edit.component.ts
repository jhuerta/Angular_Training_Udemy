import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model"
import { ShoppingListService } from "../shopping-list.service"

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }

@Output() new_ingredient_event = new EventEmitter<Ingredient>();

@ViewChild('nameInput') ingredientName:ElementRef;
@ViewChild('amountInput') ingredientAmount:ElementRef;

  addIngredient()
  {
    console.log('aaaa');
      const ingredient_name = this.ingredientName.nativeElement.value;
      const ingredient_amount = this.ingredientAmount.nativeElement.value;
      const newIngredient = new Ingredient(ingredient_name, ingredient_amount));
      this.shoppingListService.addIngredient(newIngredient);


  }

  ngOnInit() {
  }

}

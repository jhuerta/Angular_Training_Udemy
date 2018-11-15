import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model"
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

@Output() new_ingredient_event = new EventEmitter<Ingredient>();

@ViewChild('nameInput') ingredientName:ElementRef;
@ViewChild('amountInput') ingredientAmount:ElementRef;

  addIngredient()
  {
      var ingredient_name = this.ingredientName.nativeElement.value;
      var ingredient_amount = this.ingredientAmount.nativeElement.value;
      this.new_ingredient_event.emit(new Ingredient(ingredient_name, ingredient_amount));
  }

  ngOnInit() {
  }

}

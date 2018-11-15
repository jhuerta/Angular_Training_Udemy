import { Component, OnInit,Input } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('apples',5),
      new Ingredient('oranges',10),
  ];

  @Input('display') display:string="";

  constructor() { }

  ngOnInit() {
  }

}

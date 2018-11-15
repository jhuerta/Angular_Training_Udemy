import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeDetails:Recipe;

  @Output() on_recipe_click = new EventEmitter<void>();

  onRecipeClick()
  {
    this.on_recipe_click.emit();
  }



  constructor() { }

  ngOnInit() {
  }

}

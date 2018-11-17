import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model'
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetails:Recipe;

  onAddToShoppingList()`
  {
      this.recipeService.addIngrecientsToShoppingList(this.recipeDetails.ingredients);
  }


  constructor(private recipeService: RecipeService)
  { }

  ngOnInit() {
  }

}

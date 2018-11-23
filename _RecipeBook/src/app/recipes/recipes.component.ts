import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { Subscription } from "rxjs";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService:RecipeService,		private authService: AuthService,) { }

  currentRecipe:Recipe;
	observerOnAuthenticated: Subscription;

authenticated: boolean = false;
  ngOnInit() {
      this.recipeService.recipeSelected.subscribe((newRecipeChosen:Recipe) => {this.currentRecipe = newRecipeChosen})
      this.authenticated = this.authService.auth;
      	this.observerOnAuthenticated = this.authService.onAuthenticated.subscribe(
			auth => (this.authenticated = auth)
		);
  }

	ngOnDestroy() {
		this.observerOnAuthenticated.unsubscribe();
	}

}

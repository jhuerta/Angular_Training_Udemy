import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit, OnDestroy {
	authenticated: boolean = false;
	observerOnAuthenticated: Subscription;
	constructor(
		private authService: AuthService,
		private recipeService: RecipeService
	) {}
	saveRecipes() {
		this.recipeService
			.saveRecipes()
			.subscribe(response => console.log(response));
	}

	getRecipes() {
		this.recipeService.refreshRecipes();
	}

	ngOnInit() {
		this.observerOnAuthenticated = this.authService.onAuthenticated.subscribe(
			auth => (this.authenticated = auth)
		);
	}

	ngOnDestroy() {
		this.observerOnAuthenticated.unsubscribe();
	}

	onLogout() {
		this.authService.onLogOut();
	}
}

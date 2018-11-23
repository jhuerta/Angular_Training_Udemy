import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class ServerService {
	constructor(private http: Http, private authService: AuthService) {}
	private db: string =
		"https://recipebook-angular-udemy.firebaseio.com/data.json";

	saveRecipes(recipes: Recipe[]) {
		const token = this.authService.getToken();
		return this.http.put(this.db, recipes, { params: { auth: token } });
	}

	getRecipes() {
		const token = this.authService.getToken();

		return this.http.get(this.db, { params: { auth: token } }).pipe(
			map((response: Response) => {
				const recipes: Recipe[] = response.json() || [];

				for (let recipe of recipes) {
					if (!recipe["ingredients"]) {
						recipe["ingredients"] = [];
					}
				}

				return recipes;
			})
		);
	}
}

import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class ServerService {
	constructor(private http: Http) {}
	private db: string =
		"https://recipebook-angular-udemy.firebaseio.com/data.json";

	saveRecipes(recipes: Recipe[]) {
		return this.http.put(this.db, recipes);
	}

	getRecipes() {
		return this.http.get(this.db).pipe(
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

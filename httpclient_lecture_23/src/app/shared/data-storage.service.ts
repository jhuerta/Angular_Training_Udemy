import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest
} from "@angular/common/http";
import "rxjs/Rx";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  db: string = "https://recipebook-angular-udemy.firebaseio.com/new.json?auth=";
  dbDomain: string = "https://recipebook-angular-udemy.firebaseio.com/new.json";

  storeRecipes() {
    const token = this.authService.getToken() /* + "66666"*/;

    // return this.httpClient.put(this.dbDomain, this.recipeService.getRecipes(), {
    //   params: new HttpParams().append("auth", token) /*observe: "events"*/
    // });

    const req = new HttpRequest(
      "PUT",
      this.dbDomain,
      this.recipeService.getRecipes(),
      {
        reportProgress: true /*, params: new HttpParams().set("auth", token) */
      }
    );

    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient
      // .get<Recipe[]>(this.db + token)
      .get(this.dbDomain, {
        observe: "body",
        responseType: "json",
        headers: new HttpHeaders().append("holahola", "Bearer aaa"),
        params: new HttpParams().append(
          "color",
          "red"
        ) /*.append("auth", token)*/
      })
      .map(recipes => {
        // console.log('observe --------------------------' ;
        // console.log(recipes);
        // console.log('observe *************************' ;
        // const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            recipe["ingredients"] = [];
          }
        }
        return recipes;
        // return [];
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}

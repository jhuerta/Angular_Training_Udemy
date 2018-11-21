import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: Recipe;
  recipeId: number;

  onAddToShoppingList() {
    this.recipeService.addIngrecientsToShoppingList(
      this.recipeDetails.ingredients
    );
  }

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeDetails = this.recipeService.getRecipe(+params["id"]);
      this.recipeId = +params["id"];
    });
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(["/recipes"]);
  }
}

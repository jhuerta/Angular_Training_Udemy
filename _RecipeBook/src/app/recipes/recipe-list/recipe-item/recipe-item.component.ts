import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeDetails: Recipe;

  // @Output() on_recipe_click = new EventEmitter<void>();

  onRecipeClick() {
    alert("here");
    this.router.navigate(["/id", this.recipeDetails.id], {
      relativeTo: this.route
    });

    // this.recipeService.recipeSelected.emit(this.recipeDetails);
    //this.on_recipe_click.emit();
  }

  constructor(private recipeService: RecipeService, private route: Router) {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: "app-recipe-edit",
    templateUrl: "./recipe-edit.component.html",
    styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
    recipe: Recipe;
    id: number;
    editMode: boolean = false;

    recipeForm: FormGroup;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params["id"];
            if (!isNaN(this.id)) {
                this.editMode = true;
                this.recipe = this.recipeService.getRecipe(this.id);
            }

            this.initForm();
        });
    }

    onRemoveIngredient(ingredientIndex: number) {
        (<FormArray>this.recipeForm.get("ingredients")).removeAt(
            ingredientIndex
        );
    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get("ingredients")).push(
            new FormGroup({
                name: new FormControl(null, Validators.required),
                amount: new FormControl(null, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
        );
    }

    onSubmit() {
        let newRecipe = new Recipe(
            this.id,
            this.recipeForm.value["name"],
            this.recipeForm.value["description"],
            this.recipeForm.value["imagePath"],
            this.recipeForm.value["ingredients"]
        );
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, newRecipe);
        } else {
            this.recipeService.addRecipe(newRecipe);
        }

        this.router.navigate(["../"], { relativeTo: this.route });
    }

    private initForm() {
        let recipeIngredients = new FormArray([]);
        let recipeName = "";
        let recipeImage = "";
        let recipeDescriptoin = "";

        if (this.recipe) {
            recipeName = this.recipe.name;
            recipeImage = this.recipe.imagePath;
            recipeDescriptoin = this.recipe.description;

            if (this.recipe.ingredients) {
                for (let ingredient of this.recipe.ingredients) {
                    recipeIngredients.push(
                        new FormGroup({
                            name: new FormControl(
                                ingredient.name,
                                Validators.required
                            ),
                            amount: new FormControl(ingredient.amount, [
                                Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)
                            ])
                        })
                    );
                }
            }
        }

        this.recipeForm = new FormGroup({
            name: new FormControl(recipeName, Validators.required),
            imagePath: new FormControl(recipeImage, Validators.required),
            description: new FormControl(
                recipeDescriptoin,
                Validators.required
            ),
            ingredients: recipeIngredients
        });
    }
}

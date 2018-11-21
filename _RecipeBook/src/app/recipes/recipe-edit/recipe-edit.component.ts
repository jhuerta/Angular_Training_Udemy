import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
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
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params["id"];
            this.editMode = params["id"] != null;
            this.recipe =
                this.id !== null
                    ? this.recipeService.getRecipe(this.id)
                    : new Recipe();
            this.initForm();
        });
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
        console.log(this.recipeForm);
    }

    private initForm() {
        console.log(this.recipe.ingredients);

        let recipeIngredients = new FormArray([]);

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

        this.recipeForm = new FormGroup({
            name: new FormControl(this.recipe.name, Validators.required),
            imagePath: new FormControl(
                this.recipe.imagePath,
                Validators.required
            ),
            description: new FormControl(
                this.recipe.description,
                Validators.required
            ),
            ingredients: recipeIngredients
        });
    }
}

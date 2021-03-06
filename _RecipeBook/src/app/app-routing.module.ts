import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";

import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AppComponent } from "./app.component";
import { AuthGuardService } from "./auth/auth-guard.service";

import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";

const appRoutes: Routes = [
    // { path: "", component: AppComponent, pathMatch: "full" },
    //{ path: "", redirectTo: "recipes", pathMatch: "full" },
    {
        path: "recipes",
        component: RecipesComponent,
        canActivate:[AuthGuardService],
        children: [
            {
                path: "",
                component: RecipeStartComponent
            },
            {
                path: "new",
                component: RecipeEditComponent, 
            },
            {
                path: ":id",
                component: RecipeDetailComponent
            },

            {
                path: ":id/edit",
                component: RecipeEditComponent
            }
        ]
    },
    { path: "shopping-list", component: ShoppingListComponent, canActivate:[AuthGuardService] },
    { path: "signup", component: SignupComponent }
    { path: "signin", component: SigninComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

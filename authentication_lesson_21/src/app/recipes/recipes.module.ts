import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "../auth/auth-guard.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RecipesRoutingModule
    ],
    declarations: [
        RecipesComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeItemComponent
    ],
    providers: [AuthGuard]
})
export class RecipesModule {}

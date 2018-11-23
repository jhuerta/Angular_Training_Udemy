import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { FormsModule } from "@angular/forms";

// import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        // SharedModule,
        ShoppingListRoutingModule,
        FormsModule
    ],
    declarations: [ShoppingEditComponent, ShoppingListComponent]
})
export class ShoppingListModule {}

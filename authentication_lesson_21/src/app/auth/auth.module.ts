import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

import { AuthRoutingModule } from "./auth-routing.module";
import { FormsModule } from "@angular/forms";

// import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, AuthRoutingModule, FormsModule],
    declarations: [SigninComponent, SignupComponent]
})
export class AuthModule {}

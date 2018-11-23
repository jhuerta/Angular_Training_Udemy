import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
	@ViewChild("signupForm") signupForm: NgForm;

	constructor() {}

	onSignup() {
		const email = this.signupForm.value.email;
		const password = this.signupForm.value.password;

		console.log(email);
		console.log(password);
	}

	ngOnInit() {}
}

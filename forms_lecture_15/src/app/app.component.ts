import { OnInit, Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	formData;
	answer = "";
	user = {
		username: "",
		email: "",
		age: "",
		secretQuestion: "",
		answer: "",
		gender: ""
	};

	@ViewChild("thisForm") signupForm: NgForm;

	suggestUserName() {
		// const suggestedName = "Superuser";
		// this.signupForm.setValue({
		// 	age: 121,
		// 	gender: "male",
		// 	questionAnswer: "aaabbccc",
		// 	secret: "the secret value",
		// 	userData: {
		// 		username: "juan",
		// 		email: "jjjaa@adfafd.com"
		// 	}
		// });

		this.signupForm.form.patchValue({
			userData: {
				username: "aaaaaaaaa"
			}
		});
	}

	isValid = false;
	genders: string[] = ["male", "female"];

	// onSubmit(form: NgForm) {
	// 	console.log(form);
	// 	console.log(form.touched);
	// 	console.log(form.untouched);
	// }

	ngOnInit() {
		this.signupForm.valueChanges.subscribe(() => {
			this.isValid = this.signupForm.valid;
			// console.log(this.isValid);
		});
	}

	onSubmit() {
		console.log(this.signupForm);

		this.user.username = this.signupForm.value.userData.username;
		this.user.email = this.signupForm.value.userData.email;
		this.user.age = this.signupForm.value.age;
		this.user.secretQuestion = this.signupForm.value.secret;
		this.user.answer = this.signupForm.value.questionAnswer;
		this.user.gender = this.signupForm.value.gender;
		console.log(this.user);

		this.submitted = true;
		// console.log(this.signupForm.value);
		// console.log(this.signupForm.valid);
	}
	submitted: boolean = false;

	onReset() {
		console.log("resettting");
		this.signupForm.reset();
	}
}

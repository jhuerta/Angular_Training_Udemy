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
	@ViewChild("thisForm") signupForm: NgForm;
	suggestUserName() {
		const suggestedName = "Superuser";
	}
	isValid = false;

	// onSubmit(form: NgForm) {
	// 	console.log(form);
	// 	console.log(form.touched);
	// 	console.log(form.untouched);
	// }

	ngOnInit() {
		this.signupForm.valueChanges.subscribe(() => {
			this.isValid = this.signupForm.valid;
			console.log(this.isValid);
		});
	}

	onSubmit() {
		console.log(this.signupForm);
		console.log(this.signupForm.value);
		console.log(this.signupForm.valid);
	}
}

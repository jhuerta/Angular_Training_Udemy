import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	qualities: string[] = ["bad", "good", "super", "excellent"];
	@ViewChild("exForm") exForm: NgForm;

	onSubmit() {
		console.log(this.exForm.value);
	}
}

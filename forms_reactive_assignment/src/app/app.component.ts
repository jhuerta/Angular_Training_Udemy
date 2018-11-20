import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    statuses: string[] = ["Stable", "Critical", "Finished"];
    signupForm: FormGroup = null;

    onSubmit() {
        console.log(this.signupForm.value);
    }

    ngOnInit() {
        this.signupForm = new FormGroup({
            project_name: new FormControl("female", [
                CustomValidators.invalidProjectName,
                //this.noTestName,
                Validators.required
            ]),
            mail: new FormControl(
                "juan@gmail.com",
                [Validators.required, Validators.email],
                this.forbiddenEmails
            ),
            project_status: new FormControl("Finished")
        });
    }

    noTestName(control: FormControl): { [s: string]: boolean } {
        if (control.value === "test") {
            return { noTestNameAllowed: true };
        }
        return null; // Successful validation
    }

    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "test@test.com") {
                    resolve({ emailIsForbidden: true });
                } else {
                    resolve(null);
                }
            }, 100);
        });

        return promise;
    }
}

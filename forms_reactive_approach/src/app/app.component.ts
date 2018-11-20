import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    genders = ["male", "female"];
    signupForm: FormGroup;
    forbiddenUsernames: string[] = ["chris", "anna"];
    forbiddenEmailsValues: string[] = ["juan@gmail.com", "hola@adios.com"];

    forbiddenNames(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return { nameIsForbidden: true };
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
    ngOnInit() {
        this.signupForm = new FormGroup({
            userData: new FormGroup({
                username: new FormControl("a", [
                    Validators.required,
                    Validators.minLength(3),
                    this.forbiddenNames.bind(this)
                ]),
                email: new FormControl(
                    "hola",
                    Validators.email,
                    this.forbiddenEmails
                )
            }),
            gender: new FormControl("female"),
            hobbies: new FormArray([])
        });
    }

    onAddHobbies() {
        const control = new FormControl("null", Validators.required);
        (<FormArray>this.signupForm.get("hobbies")).push(control);
    }

    onSubmit() {
        console.log(this.signupForm);
        if (this.signupForm.valid) {
            console.log(this.signupForm.value);
        } else {
            console.log("not valid");
        }
    }

    onSetValue() {
        // let someHobbies = new FormArray([]);
        // someHobbies.push(new FormControl("walk"));
        // someHobbies.push(new FormControl("run"));
        // someHobbies.push(new FormControl("swim"));
        // this.signupForm.setValue({
        //     userData: {
        //         username: "Juan",
        //         email: "jj@hh.cc"
        //     },
        //     gender: "female",
        //     hobbies: this.signupForm.get("hobbies")
        // });

        let hobbiesControl = <FormArray>this.signupForm.controls.hobbies;
        hobbiesControl.push(new FormControl("run"));
        hobbiesControl.push(new FormControl("talk"));
        hobbiesControl.push(new FormControl("walk"));
        hobbiesControl = ["a", "b"];
    }
}

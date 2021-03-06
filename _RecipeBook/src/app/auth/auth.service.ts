import * as firebase from "firebase";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import {Injectable} from "@angular/core"

@Injectable()
export class AuthService {

	constructor(private router: Router){}

	auth: boolean = false;
	user: { email: string };
	token: string;
	onLogOut() {
		this.auth = false;
		this.onAuthenticated.next(this.auth);
		this.router.navigate(["/"]);
		firebase
			.auth()
			.signOut()
			.then(evt => {
				console.log("Logout OK");
				this.token = "";
			})
			.catch(errorEvt => {
				console.log("Logout OK");
				console.log(errorEvt);
			});
	}
	onAuthenticated = new Subject<boolean>();

	getToken() {
		const currentUser = firebase.auth().currentUser;
		if (currentUser) {
			currentUser.getIdToken().then((token: string) => {
				this.token = token;
			});
		}

		return this.token;
	}

	signinUser(email, password) {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(response => {
				this.router.navigate(["/recipes"]);
				console.log('usr ok');
				firebase
					.auth()
					.currentUser.getIdToken()
					.then((token: string) => {
						this.token = token;
					});
				this.auth = true;
				this.onAuthenticated.next(this.auth);
			})
			.catch(error => console.log(error));
	}
	signupUser(email, password) {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(evt => {
				console.log("User creatd OK ****");
				console.log(evt);
			})
			.catch(error => console.log(error));
	}
}

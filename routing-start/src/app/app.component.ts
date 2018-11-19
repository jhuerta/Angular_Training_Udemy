import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	isLoggedIn: boolean = false;

	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.auth.loggedEvent.subscribe(logged => {
			this.isLoggedIn = logged;
		});
	}

	onLogin() {
		this.auth.login();
		this.isLoggedIn = true;
	}

	onLogout() {
		this.auth.logout();
		this.isLoggedIn = false;
	}
}

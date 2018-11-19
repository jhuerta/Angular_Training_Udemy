import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
	onLoadServer(id: number) {
		// setTimeout(() => {
		// 	this.router.navigate(["/servers"]);
		// }, 2000);

		this.router.navigate(["/server", id, "edit"], {
			queryParams: { allowEdit: "1" },
			fragment: "loading"
		});
	}
	constructor(private router: Router, private auth: AuthService) {}

	ngOnInit() {}
}

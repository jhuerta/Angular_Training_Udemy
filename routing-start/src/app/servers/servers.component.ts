import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ServersService } from "./servers.service";

@Component({
	selector: "app-servers",
	templateUrl: "./servers.component.html",
	styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
	private servers: { id: number; name: string; status: string }[] = [];

	constructor(
		private router: Router,
		private serversService: ServersService,
		private route: ActivatedRoute
	) {}

	onReload() {
		this.router.navigate(["/servers"], { relativeTo: this.route });

		// setTimeout(() => {
		// 	console.log("by bie");
		// 	this.router.navigate(["servers"]);
		// }, 2000);
	}

	ngOnInit() {
		this.servers = this.serversService.getServers();
	}
}

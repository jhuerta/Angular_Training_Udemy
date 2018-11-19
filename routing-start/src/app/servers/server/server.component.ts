import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ServersService } from "../servers.service";

@Component({
	selector: "app-server",
	templateUrl: "./server.component.html",
	styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
	server: { id: number; name: string; status: string };

	constructor(
		private serversService: ServersService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	onEdit() {
		this.server.id;
		// this.router.navigate([`/servers/${this.server.id}/edit`]);
		this.router.navigate(["edit"], {
			relativeTo: this.route,
			queryParamsHandling: "preserve"
		});
	}

	ngOnInit() {
		let serverId = +this.route.snapshot.params["id"];
		this.server = this.serversService.getServer(serverId);

		this.route.params.subscribe((params: Params) => {
			serverId = +params["id"];
			this.server = this.serversService.getServer(serverId);
		});
	}
}

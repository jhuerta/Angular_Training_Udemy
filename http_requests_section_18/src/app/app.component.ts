import { Component } from "@angular/core";
import { ServerService } from "./server.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  onGetServers() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => {
        // console.log(servers);
        this.servers = servers;
      },
      errors => {
        console.log("errors - APP COMPONENT - BEGIN");
        console.log(errors);
        console.log("errors - APP COMPONENT - END");
      }
    );
  }
  onSaveServers() {
    this.serverService.storeServers(this.servers).subscribe(
      response => {
        console.log(response);
      },
      errors => {
        console.log(errors);
      }
    );
  }

  onUpdateServers() {
    this.serverService.updateServers(this.servers).subscribe(
      response => {
        console.log(response);
      },
      errors => {
        console.log(errors);
      }
    );
  }

  constructor(private serverService: ServerService) {}
  servers = [
    {
      name: "Testserver",
      capacity: 10,
      id: this.generateId()
    },
    {
      name: "Liveserver",
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

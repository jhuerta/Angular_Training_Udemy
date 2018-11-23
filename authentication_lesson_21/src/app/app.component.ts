import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { IgnoredServices } from "./credentials.services.ngsec";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  constructor(private ignoredServices: IgnoredServices) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: this.ignoredServices.apiKey,
      authDomain: this.ignoredServices.authDomain
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

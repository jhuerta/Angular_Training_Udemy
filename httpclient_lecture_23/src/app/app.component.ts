import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBSzTpFRV6pl1Yp5VoYwNNIBpS9ImFz1z4",
      authDomain: "recipebook-angular-udemy.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

import { Component, OnInit } from '@angular/core';
import { IgnoredServices } from "./credentials.services.ngsec";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	constructor(private ignoredServies: IgnoredServices)
	{}

	ngOnInit(){
		const key = this.ignoredServies.apiKey;
		const authDomain = this.ignoredServies.authDomain;
		firebase.initializeApp(apiKey: key, authDomain: authDomain);

	}
	changeMenu(menu){
		this.display = menu;
	}
	display:string='recipes';
}

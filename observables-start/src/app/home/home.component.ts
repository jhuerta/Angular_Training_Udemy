import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Observer, Subscription, interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
	constructor() {}

	observableBasic: Subscription;
	observableCustom: Subscription;

	basicObservable() {
		const myNumbers = interval(1000).pipe(map((data: number) => {
			return { number: data, message: "ALL GOOD" };
		});
		this.observableBasic = myNumbers.subscribe((number: number) => {
			console.log(number);
		}));
	}

	customObservable() {
		const myObservable = Observable.create((observer: Observer<string>) => {
			setTimeout(() => {
				observer.next("first package");
			}, 1000);
			setTimeout(() => {
				observer.next("second package");
			}, 2000);
			setTimeout(() => {
				observer.error("this does not work");
			}, 3000);
			// setTimeout(() => {
			// 	observer.complete();
			// }, 4000);
			setTimeout(() => {
				observer.next("after comlete");
			}, 5000);
		});

		this.observableCustom = myObservable.subscribe(
			(data: string) => {
				console.log(data);
			},
			(data: string) => {
				console.error("Error: " + data);
			},
			() => {
				console.log("completed--------------");
			}
		);
	}

	ngOnDestroy() {
		this.observableBasic.unsubscribe();
		// this.observableCustom.unsubscribe();
	}

	ngOnInit() {
		this.basicObservable();
		// this.customObservable();
	}
}

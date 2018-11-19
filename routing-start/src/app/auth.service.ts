import { EventEmitter, Injectable } from "@angular/core";

export class AuthService {
	loggedEvent = new EventEmitter<boolean>();

	loggedIn = false;
	login() {
		this.loggedIn = true;
		this.loggedEvent.emit(true);
	}

	logout() {
		this.loggedIn = false;
	}

	isAuthenticated() {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.loggedIn);
			}, 5);
		});

		return promise;
	}
}

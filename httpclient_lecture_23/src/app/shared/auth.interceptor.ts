import {
	HttpEvent,
	HttpRequest,
	HttpInterceptor,
	HttpHandler
} from "@angular/common/http";

import { AuthService } from "../auth/auth.service";
import { OnInit, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor, OnInit {
	token;

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.token = this.authService.getToken();
		console.log("***********************token");
		console.log(this.token);
		console.log("token****************");
	}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		this.token = this.authService.getToken();
		console.log("***********************token");
		console.log(this.token);
		console.log("token****************");

		// const copiedRequest = request.clone({headers: request.headers.append('auth',token)});
		const copiedRequest = request.clone({
			//params: request.params.set("auth", this.token);
		});
		console.log("---> Intercepted", copiedRequest, "<--------- DONE");
		return next.handle(copiedRequest);
	}
}

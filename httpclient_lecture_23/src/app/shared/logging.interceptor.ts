import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

/*
import {tap} from 'rxjs/operators';
next.handle(req).pipe(tap(...))
*/
export class LoggingInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).do(event => {
			console.log("**** Logging Interceptor", event);
		});
	}
}
 

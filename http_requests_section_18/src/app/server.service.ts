import { Observable } from "rxjs";
import { map, catchError, throwError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    private db: string =
        "https://udemy-angular-training-0001.firebaseio.com/data";

    storeServers(servers: any[]) {
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        return this.http.post(this.db, servers, { headers: headers });
    }

    updateServers(servers: any[]) {
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        return this.http.put(this.db, servers, { headers: headers });
    }

    getServers() {
        return this.http
            .get(this.db)
            .pipe(
                map((response: Response) => {
                    const data = response.json();
                    for (const server of data) {
                        server.name = "NEW----***" + server.name;
                    }
                    return data;
                })
            )
            .pipe(
                catchError(error => {
                    console.log("SERVER SERVICE BEGIN ---------");
                    console.log(error);
                    console.log("SERVER SERVICE END ---------");
                    return Observable.throw("*******************");
                })
            );
    }
}

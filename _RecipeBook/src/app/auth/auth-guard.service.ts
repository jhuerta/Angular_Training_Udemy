import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'
import {Injectable} from'@angular/core'
import {AuthService} from './auth.service'

@Injectable()
export class AuthGuardService {
	constructor(private authService:AuthService){}
	canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
		return this.authService.auth;

	}
}
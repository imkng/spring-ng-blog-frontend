import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth/auth.service";


@Injectable({
    providedIn: 'root'
  })
export class AuthGaurdService {
    constructor(private authService: AuthService, private router: Router) { }
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      let isAuthenticated = this.authService.isAuthenticated();
      if(isAuthenticated){
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
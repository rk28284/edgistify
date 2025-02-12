import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;


    // const token = sessionStorage.getItem('token');
const authToken=sessionStorage.getItem('token')
    console.log(authToken);

    if (authToken) {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }
  
}

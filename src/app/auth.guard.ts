import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ApisService} from './apis.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  previous: string
  constructor(private auth: AuthService, private router: Router, public apis: ApisService) {
    this.previous = ''
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
    return this.auth.isAuthenticated$.pipe(
      tap(loggedIn => {
        
        if (!loggedIn && this.router.url != '/') {
          this.auth.login(state.url);
        }
        else if (loggedIn && !this.auth.hasRole() && this.previous != this.router.url) {
         
          this.previous = this.router.url;

          this.router.navigate(['/courses'])
        }
        else if (loggedIn && !this.apis.hasSelectedCourse() && this.previous != this.router.url) {
    
          this.previous = this.router.url;
         
          this.router.navigate(['/courses'])
        }
      })
    );
  }

}
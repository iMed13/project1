import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private store: Store<{ login: any }>,
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree | any> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.select(appState => appState.login.username)
      .pipe(map(authUser => {
        if (!authUser) {
          this.router.navigate(['/login'])
          return false;
        }
        return true;
      }))
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoordinatorServiceService } from '../services/coordinatorService/coordinator-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoSessionValidatorGuard implements CanActivate {
  constructor(private coordService: CoordinatorServiceService, private router: Router,){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return !this.coordService.validateSessionToken();
    }
  
}

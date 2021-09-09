import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoordinatorServiceService } from '../services/coordinatorService/coordinator-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionValidatorGuard implements CanActivate {
  constructor(private coordService: CoordinatorServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    return this.coordService.validateSessionToken();
  }
  
}

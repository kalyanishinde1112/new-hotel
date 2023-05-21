import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../access/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private tokensvc:TokenService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :boolean {
      const token=this.tokensvc.getToken();
      if(token && token.length>0){
        return true;
      }
      else{
        this.router.navigate(['/sign-in']);
        return false;
      }
    
  }
  
}

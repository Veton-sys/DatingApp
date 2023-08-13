import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private accountService: AccountService, private toastr: ToastrService){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    return this.accountService.currentUser$.pipe(
      map(user => {
        if(user) return true;
        else{
          this.toastr.error('you shall not pass!')
          return false;
        }
      })
    )
  }
  
}

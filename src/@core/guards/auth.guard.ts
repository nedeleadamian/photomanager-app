import { CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      void this.router.navigate(['/auth']);
      return false;
    }
    const jwtPayload = jwtDecode<any>(accessToken);

    if (!jwtPayload) {
      void this.router.navigate(['/auth']);
      return false;
    }

    return !dayjs().isAfter(new Date(jwtPayload.exp * 1000));
  }
}

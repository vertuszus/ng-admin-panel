import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {User} from "../user.model";
import {catchError, delay} from "rxjs/operators";
import {AdminService} from "../services/admin.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<boolean> {

  constructor(
    private adminService: AdminService,
  ) {}

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.adminService.getPersonalList().pipe(
      delay(500),
    )
  }
}

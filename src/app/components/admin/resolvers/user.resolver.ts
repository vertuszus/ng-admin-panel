import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {AdminService} from "../services/admin.service";
import {User} from "../user.model";
import {catchError, delay} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<boolean> {

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.adminService.getPerson(route.params?.['id']).pipe(
      delay(500),
      catchError( () => {
        this.router.navigate(['admin/contacts'])
        return EMPTY
      })
    )
  }
}

import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IUser} from "../../interfaces";
import {UserService} from "../user.service";



@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const {id} = route.params;
    return this.userService.getUser(id);
  }


}

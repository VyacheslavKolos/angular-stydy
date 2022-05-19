import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http:HttpClient) { }

  getAll():Observable<IUser[]>{
    return this.Http.get<IUser[]>(urls.users);
  }

  getUser(id:number):Observable<IUser>{
    return this.Http.get<IUser>(urls.users+'/'+id);
  }
}

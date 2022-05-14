import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {urls} from "../constants";

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

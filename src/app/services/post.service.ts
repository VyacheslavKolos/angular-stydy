import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private Http: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.Http.get<IPost[]>(urls.posts);
  }
}

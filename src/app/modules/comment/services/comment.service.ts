import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IComment} from "../interfaces";
import {urls} from "../../../constants";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private Http: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.Http.get<IComment[]>(urls.comments);
  }

  getOne(id: number): Observable<IComment> {
    return this.Http.get<IComment>(urls.comments + '/' + id);
  }
}

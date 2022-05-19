import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICommentDetails} from "../../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetailsObj:ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.commentDetailsObj = data as ICommentDetails;
    })
  }

}

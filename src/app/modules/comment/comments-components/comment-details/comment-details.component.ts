import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICommentDetails} from "../../interfaces";


@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetailsObj: ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(() => {
    //   let {state: {data}} = history;
    //   this.commentDetailsObj = data as ICommentDetails;
    // })

    this.activatedRoute.data.subscribe(({commentData}) => this.commentDetailsObj = commentData)
  }

}

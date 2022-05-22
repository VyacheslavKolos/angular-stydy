import {Component, OnInit} from '@angular/core';

import {CommentService} from "../../services";
import {IComment} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService: CommentService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.commentService.getAll().subscribe(value => this.comments = value)
    this.activatedRoute.data.subscribe(({commentsData})=>this.comments=commentsData)
  }

}

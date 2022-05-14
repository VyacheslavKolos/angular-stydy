import { Component, OnInit } from '@angular/core';
import {ICommentDetails} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetailsObj:ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ({id})=>{
        this.commentService.getOne(+id).subscribe(value => this.commentDetailsObj=value)
      }
    );

  }

}

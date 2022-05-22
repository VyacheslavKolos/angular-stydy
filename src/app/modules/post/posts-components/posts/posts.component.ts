import {Component, OnInit} from '@angular/core';

import {IPost} from "../../interfaces";
import {PostService} from "../../services";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.postService.getAll().subscribe(value => this.posts = value)
    this.activatedRoute.data.subscribe(({postsData}) =>this.posts=postsData )
  }

}

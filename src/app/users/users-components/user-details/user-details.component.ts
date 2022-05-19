import { Component, OnInit } from '@angular/core';
import {IUserDetails} from "../../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: IUserDetails;


  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state:{data}}=history;
      this.userDetailsObj=data as IUserDetails;
    })
  }
}

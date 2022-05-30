import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[];
  @Output()
  userEmitt=new EventEmitter<IUser>();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value )
  }

  catchUserEmit(userCatch:IUser):void{
    this.userEmitt.emit(userCatch)
  }

}

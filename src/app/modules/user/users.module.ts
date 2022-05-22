import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users-components/users/users.component';
import {UserComponent} from './users-components/user/user.component';
import {UserDetailsComponent} from './users-components/user-details/user-details.component';
import {UserGuard, UserResolver, UserService, UsersResolver} from "./services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, UsersResolver, UserResolver, UserGuard]
})
export class UsersModule {
}

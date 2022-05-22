import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UserGuard, UserResolver, UsersResolver} from "./services"


const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData:UsersResolver},
    canDeactivate:[UserGuard],
    children: [
      {path: ':id', component: UserDetailsComponent, resolve:{userData:UserResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}


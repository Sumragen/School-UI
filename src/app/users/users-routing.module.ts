import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {UserListComponent} from './user-list/user-list.component';
import {IsLoggedOut} from '../shared/is-logged-out.service';
import {ProfileComponent} from './profile/profile.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const UsersRoutes: Routes = [
  {
    path: 'users', component: UserListComponent
  },
  // {path: 'users', component: UsersComponent, resolve: [IsLoggedOut]},
  // {path: 'profile', component: ProfileComponent, resolve: [IsLoggedOut]},
  {path: 'users/:id', component: UserDetailComponent, resolve: [IsLoggedOut]}
]

@NgModule({
  imports: [
    RouterModule.forChild(UsersRoutes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}

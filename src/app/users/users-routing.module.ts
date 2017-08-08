import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {IsLoggedOut} from '../shared/is-logged-out.service';
import {UserDetailComponent} from './user-detail/user-detail.component';

const UsersRoutes: Routes = [
    {
      path: '', component: UserListComponent
    },
    {
      path: ':id', component: UserDetailComponent, resolve: [IsLoggedOut]
    }
  ]
;

@NgModule({
  imports: [
    RouterModule.forChild(UsersRoutes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}

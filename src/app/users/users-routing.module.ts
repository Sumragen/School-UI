import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserEditComponent} from './user-edit/user-edit.component';

const UsersRoutes: Routes = [
  {path: '', component: UserListComponent},
  {path: ':id', component: UserDetailComponent},
  {path: ':id/edit', component: UserEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(UsersRoutes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}

/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {UserService} from './user.service';
import {IsLoggedOut} from '../shared/is-logged-out.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {UsersRoutingModule} from './users-routing.module';
import {UserItemComponent} from './user-list/user-item/user-item.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';

@NgModule({
  declarations: [
    UserItemComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent,
    UserNotFoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  providers: [UserService, IsLoggedOut],
  exports: [RouterModule]
})
export class UsersModule {
}

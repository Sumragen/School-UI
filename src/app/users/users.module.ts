/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './users.component';
import {UserComponent} from './user.component';
import {ProfileComponent} from './profile.component';
import {UserService} from './user.service';
import {IsLoggedOut} from '../shared/is-logged-out.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {UsersRoutingModule} from './users-routing.module';
import {CommonModule} from '@angular/common';
import {UserItemComponent} from './user-list/user-item/user-item.component';

@NgModule({
  declarations: [
    // UsersComponent,
    // UserComponent,
    // ProfileComponent,
    UserItemComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UserService, IsLoggedOut],
  exports: [RouterModule]
})
export class UsersModule {
}

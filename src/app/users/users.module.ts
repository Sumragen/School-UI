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

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user/:id', component: ProfileComponent}];

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [UserService],
  exports: [RouterModule]
})
export class UsersModule {
}

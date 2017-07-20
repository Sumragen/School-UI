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

const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: [IsLoggedOut]},
  {path: 'profile', component: ProfileComponent, resolve: [IsLoggedOut]},
  {path: 'user/:id', component: ProfileComponent, resolve: [IsLoggedOut]}];

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
  providers: [UserService, IsLoggedOut],
  exports: [RouterModule]
})
export class UsersModule {
}

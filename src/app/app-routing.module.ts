/**
 * Created by sumragen on 04.07.17.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {HomeComponent} from './core/home.component';

import {AuthGuard} from './shared/auth-guard.service'
import {IsLoggedIn} from './shared/is-logged-in.service'

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, resolve: [IsLoggedIn],
  },
  {
    path: 'register', component: RegisterComponent, resolve: [IsLoggedIn],
  },
  {
    path: 'home', canActivate: [AuthGuard], component: HomeComponent,
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

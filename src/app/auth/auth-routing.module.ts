import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {IsLoggedIn} from '../shared/is-logged-in.service';
import {RegisterComponent} from './register/register.component';

const authRoutes: Routes = [
  {
    path: 'login', component: LoginComponent, resolve: [IsLoggedIn],
  },
  {
    path: 'register', component: RegisterComponent, resolve: [IsLoggedIn],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    IsLoggedIn
  ]
})
export class AuthRoutingModule {

}

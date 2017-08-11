import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AnonymousGuardService} from '../shared/anonymous-guard.service';
import {IsLoggedIn} from '../shared/is-logged-in.service';

const authRoutes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [AnonymousGuardService]
  },
  {
    path: 'register', component: RegisterComponent, canActivate: [AnonymousGuardService]
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
    IsLoggedIn,
    AnonymousGuardService
  ]
})
export class AuthRoutingModule {

}

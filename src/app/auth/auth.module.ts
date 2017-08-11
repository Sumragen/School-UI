/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    AuthRoutingModule
  ],
  providers: []
})

export class AuthModule {
}

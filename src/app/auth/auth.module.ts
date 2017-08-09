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
import {AuthService} from './auth.service';
import {AuthRoutingModule} from './auth-routing.module';
import {ApiUrlDict} from '../shared/api-url-dict';
import {ApiResolverService} from '../shared/api-resolver.service';
import {ApiService} from '../shared/api.service';

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
  providers: [ApiUrlDict, ApiResolverService, ApiService]
})

export class AuthModule {
}

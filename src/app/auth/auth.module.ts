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
import {EmailValidatorDirective} from './email-validator.directive'
import {PasswordValidatorDirective} from './password-validator.directive';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, EmailValidatorDirective, PasswordValidatorDirective],
  imports: [FormsModule, RouterModule, ReactiveFormsModule, BrowserModule],
  providers: [AuthService]
})

export class AuthModule {
}

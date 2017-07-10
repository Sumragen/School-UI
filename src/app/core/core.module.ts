/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HeaderComponent} from './header.component';
import {HomeComponent} from './home.component';

import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [BrowserModule],
  providers: [
    AuthService
  ]
})

export class CoreModule {

}

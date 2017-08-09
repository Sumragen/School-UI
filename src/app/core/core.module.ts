/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';

import {AuthService} from '../auth/auth.service';
import {BsDropdownModule} from "ngx-bootstrap";
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class CoreModule {

}

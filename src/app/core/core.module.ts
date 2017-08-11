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
import {ToggleDisplayDirective} from './header/toggle-display.directive';
import {CoreRoutingModule} from './core-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ToggleDisplayDirective
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule,
    BrowserAnimationsModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class CoreModule {

}

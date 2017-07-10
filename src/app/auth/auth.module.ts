/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule],
  providers: [AuthService]
})

export class AuthModule {
}

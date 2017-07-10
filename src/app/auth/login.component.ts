/**
 * Created by sumragen on 04.07.17.
 */
import {Component} from '@angular/core';

import {AuthService} from './auth.service';

import {LoginDto} from './login-dto.model';

@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})

export class LoginComponent {
  user: LoginDto;
  constructor(private authService: AuthService) {
    this.user = {
      username: '',
      password: ''
    }
  }

  signIn(): void {
    this.authService.signIn(this.user);
  }
}

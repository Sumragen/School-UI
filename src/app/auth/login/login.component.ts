/**
 * Created by sumragen on 04.07.17.
 */
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../auth.service';

import {LoginDto} from '../login-dto.model';

@Component({
  selector: 'app-login-page',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})

export class LoginComponent {
  user: LoginDto;
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  validationMessages = {
    'username': {
      'required': 'Username is required.'
    },
    'password': {
      'required': 'Password is required.'
    }
  };

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  signIn(): void {
    this.authService.signIn(this.loginForm.value);
  }
}

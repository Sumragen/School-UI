import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  validationMessages = {
    username: {
      required: 'Username is required.',
      minlength: 'minLength validation',
      maxlength: 'maxLength validation'
    },
    password: {
      required: 'Password is required.',
      minlength: 'minLength validation',
      maxlength: 'maxLength validation',
      passwordIncorrect: 'Incorrect password'
    },
    first_name: {
      required: 'First name is required.',
      minlength: 'minLength validation',
      maxlength: 'maxLength validation'
    },
    last_name: {
      required: 'Last name is required.',
      minlength: 'minLength validation',
      maxlength: 'maxLength validation'
    },
    email: {
      required: 'Email is required.',
      email: 'Please, set correct Email'
    },
  };

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  createRegisterForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(36)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(36), this.passwordCheck]),
      first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(36)]),
      last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(36)]),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  signUp(): void {
    if (this.registerForm.valid) {
      this.authService.signUp(this.registerForm.value)
    }
  }

  passwordCheck(control: FormControl): { [s: string]: boolean } {
    const checkRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
    if (!checkRegEx.test(control.value)) {
      return {'passwordIncorrect': true};
    }
    return null;
  }
}

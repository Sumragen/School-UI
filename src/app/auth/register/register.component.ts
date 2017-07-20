import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {emailValidator} from '../email-validator.directive';
import {passwordValidator} from '../password-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formErrors = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: ''
  };
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
      incorrectPassword: 'Incorrect password'
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
      incorrectEmail: 'Please, set correct Email'
    },
  };

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.createRegisterForm();
    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  ngOnInit() {
  }

  createRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(36)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(36), passwordValidator()])],
      first_name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(36)])],
      last_name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(36)])],
      email: ['', Validators.compose([Validators.required, emailValidator()])]
    });
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) {
      return;
    }
    const form = this.registerForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (this.formErrors.hasOwnProperty(field)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  signUp(): void {
    if (this.registerForm.valid) {
      this.authService.signUp(this.registerForm.value)
    }
  }

}

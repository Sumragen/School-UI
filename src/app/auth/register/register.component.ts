import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  validationMessages = {
    username: {
      required: 'Field "Username" is required.',
      minlength: 'Username should consist of at least 4 symbols',
      maxlength: 'Username should consist of at most 36 symbols'
    },
    password: {
      required: 'Field "Password" is required.',
      minlength: 'Password should consist of at least 6 symbols',
      maxlength: 'Password should consist of at most 36 symbols',
      passwordIncorrect: 'Password must be 6 characters including 1 uppercase letter, 1 lowercase letter, alphanumeric characters'
    },
    first_name: {
      required: 'Field "First Name" is required.',
      minlength: 'First Name should consist of at least 3 symbols',
      maxlength: 'First Name should consist of at most 36 symbols'
    },
    last_name: {
      required: 'Field "Last Name" is required.',
      minlength: 'Last Name should consist of at least 3 symbols',
      maxlength: 'Last Name should consist of at most 36 symbols'
    },
    email: {
      required: 'Field "Email" is required.',
      email: 'Please, set correct Email'
    },
  };

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  createRegisterForm(): void {
    this.registerForm = this.fb.group({
      'username': [null, [Validators.required, Validators.minLength(4), Validators.maxLength(36)]],
      'password': [null, [Validators.required, Validators.maxLength(36), this.passwordCheck]],
      'first_name': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(36)]],
      'last_name': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(36)]],
      'email': [null, [Validators.required, Validators.email]]
    });
  }

  signUp(): void {
    if (this.registerForm.valid) {
      this.authService.signUp(this.registerForm.value)
    }
  }

  passwordCheck(control: FormControl): { [s: string]: boolean } {
    const checkRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/;
    if (!checkRegEx.test(control.value)) {
      return {'passwordIncorrect': true};
    }
    return null;
  }
}

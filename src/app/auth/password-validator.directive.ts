/**
 * Created by sumragen on 17.07.17.
 */
import { Directive, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
    const password = control.value;
    const no = regex.test(password);
    return no ? null : {'incorrectPassword': {password}};
  };
}

@Directive({
  selector: '[appIncorrectPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})
export class PasswordValidatorDirective implements Validator, OnChanges {
  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['incorrectPassword'];
    if (change) {
      this.valFn = passwordValidator();
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}


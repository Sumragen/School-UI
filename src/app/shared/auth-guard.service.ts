/**
 * Created by sumragen on 06.07.17.
 */
import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from '@angular/router';

import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/'])
    }
  }

  canActivateChild() {
    return this.canActivate();
  }
}

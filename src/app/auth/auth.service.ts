/**
 * Created by sumragen on 04.07.17.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

import {LoginDto} from './login-dto.model';
import {RegisterDto} from './register-dto.model';
import {SecurityContextService} from '../shared/security-context.service';
import {AlternativeApiService} from '../shared/alternative-api.service';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private alternativeApiService: AlternativeApiService,
              private securityContext: SecurityContextService) {
  };

  signIn(user: LoginDto) {
    return new Promise((resolve, reject) => {
      this.alternativeApiService.signIn(user)
        .subscribe(response => {
            this.securityContext.setSessionID(response.sessionID);
            this.securityContext.setPrincipal(response.currentUser);
            this.router.navigate(['/home'])
              .then(() => null)
              .catch(error => reject(error));
          },
          // TODO: display error message via notification service
          error => reject(error))
    });
  }

  signUp(data: RegisterDto): void {
    this.alternativeApiService.register(data)
      .subscribe(() => {
        this.router.navigate(['/'])
          .catch(err => console.log(err));
      })
  }

  logOut(): void {
    this.securityContext.removePrincipal();
    this.router.navigate(['/'])
      .catch(err => console.log(err));
  }

  isAuthenticated() {
    return !!this.securityContext.getPrincipal();
  }
}

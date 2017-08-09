/**
 * Created by sumragen on 04.07.17.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

import {SecurityContextService} from '../shared/security-context.service';
import {ApiService} from '../shared/api.service';
import {ApiResolverService} from '../shared/api-resolver.service';

import {LoginDto} from './login-dto.model';
import {RegisterDto} from './register-dto.model';

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private apiService: ApiService,
              private apiResolverService: ApiResolverService,
              private securityContext: SecurityContextService) {
  };

  signIn(user: LoginDto): void {
    const endpoint = this.apiResolverService.get('signIn', {body: user});
    this.apiService.request(endpoint.url, endpoint.request)
      .map(response => response.json())
      .subscribe(response => {
          const currentUser = response.currentUser;
          this.securityContext.setSessionID(response.sessionID);
          this.securityContext.setPrincipal(currentUser);
          this.router.navigate(['/home'])
            .catch(err => console.log(err));
        },
        // TODO: display error message via notification service
        error => console.log(error))
  }

  signUp(data: RegisterDto): void {
    const endpoint = this.apiResolverService.get('register', {body: data});
    this.apiService.request(endpoint.url, endpoint.request)
      .map(response => response.json())
      .subscribe(response => {
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

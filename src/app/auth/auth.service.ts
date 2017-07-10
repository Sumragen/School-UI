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
          this.securityContext.setPrincipal(currentUser);
          this.router.navigate(['/home'])
            .catch(err => console.log(err));
        },
        // TODO: display error message via notification service
        error => console.log(error))
  }

  logOut(): void {
    this.securityContext.setPrincipal(null);
    this.router.navigate(['/'])
      .catch(err => console.log(err));
  }
}

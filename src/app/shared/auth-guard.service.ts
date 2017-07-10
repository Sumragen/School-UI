/**
 * Created by sumragen on 06.07.17.
 */
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

import {SecurityContextService} from './security-context.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private securityContext: SecurityContextService) {

  }

  canActivate() {
    console.log('AuthGuard');
    return !!this.securityContext.getPrincipal();
  }
}

import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {SecurityContextService} from './security-context.service';

@Injectable()
export class AnonymousGuardService implements CanActivate {
  constructor(private securityContext: SecurityContextService,
              private router: Router) {
  }

  canActivate() {
    if (!this.securityContext.getPrincipal()) {
      return true;
    } else {
      this.router.navigate(['/home'])
    }
  }
}

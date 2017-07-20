/**
 * Created by sumragen on 14.07.17.
 */

import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {SecurityContextService} from './security-context.service';

@Injectable()
export class IsLoggedOut {
  constructor(private router: Router,
              private securityContext: SecurityContextService) {
  }

  resolve(): void {
    if (!this.securityContext.getPrincipal()) {
      this.router.navigate([''])
    }
  }
}

/**
 * Created by sumragen on 06.07.17.
 */
import {Component} from '@angular/core';

import {AuthService} from '../auth/auth.service';
import {SecurityContextService} from '../shared/security-context.service';

@Component({
  selector: 'app-base-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private securityContext: SecurityContextService, private authService: AuthService) {
  }

  isLoggedIn(): boolean {
    return !!this.securityContext.getPrincipal();
  }

  logOut(): void {
    this.authService.logOut();
  }

  getUserName(): string {
    const user = this.securityContext.getPrincipal();
    return user.firstName + ' ' + user.lastName;
  }
}

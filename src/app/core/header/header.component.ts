/**
 * Created by sumragen on 06.07.17.
 */
import {animate, Component, HostBinding, OnInit, state, style, transition, trigger} from '@angular/core';

import {AuthService} from '../../auth/auth.service';
import {SecurityContextService} from '../../shared/security-context.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('sidebar', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('close', style({
        transform: 'translateX(-250px)'
      })),
      transition('open <=> close', animate('500ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  sidebarState: string;

  constructor(private securityContext: SecurityContextService,
              private authService: AuthService,
              private router: Router) {
  }

  isLoggedIn(): boolean {
    return !!this.securityContext.getPrincipal();
  }

  logOut(): void {
    this.authService.logOut();
    this.sidebarState = 'close';
  }

  getUserName(): string {
    const user = this.securityContext.getPrincipal();
    return user.firstName + ' ' + user.lastName;
  }

  getUserId() {
    const user = this.securityContext.getPrincipal();
    return user.id;
  }

  toggleSidebar() {
    this.sidebarState = this.sidebarState === 'open' ? 'close' : 'open';
  }

  goTo(path: string, params: string[]) {
    this.router.navigate([path].concat(params || []));
    this.sidebarState = 'close';
  }

  ngOnInit() {
    this.sidebarState = 'close';
  }
}

/**
 * Created by sumragen on 06.07.17.
 */
import {animate, Component, OnInit, state, style, transition, trigger} from '@angular/core';

import {AuthService} from '../../auth/auth.service';
import {SecurityContextService} from '../../shared/security-context.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('sidebar', [
      state('enter', style({
        transform: 'translateX(0)'
      })),
      state('leave', style({
        transform: 'translateX(-250px)'
      })),
      transition('enter <=> leave', animate('500ms ease-in-out'))
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
    this.sidebarState = 'leave';
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
    this.sidebarState = this.sidebarState === 'enter' ? 'leave' : 'enter';
  }

  goTo(path: string, params: string[]) {
    this.router.navigate([path].concat(params || []));
    this.sidebarState = 'leave';
  }

  onDetectMousePosition(state: string) {
    this.sidebarState = state;
  }

  ngOnInit() {
    this.sidebarState = 'leave';
  }
}

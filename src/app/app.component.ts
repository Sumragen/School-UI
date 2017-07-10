import {Component} from '@angular/core';

import {SecurityContextService} from './shared/security-context.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private securityContext: SecurityContextService) {}

  getCurrentUserName(): string {
    const user = this.securityContext.getPrincipal();
    return !!user ? user.firstName : '';
  }
}

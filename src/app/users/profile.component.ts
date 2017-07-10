/**
 * Created by sumragen on 10.07.17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import 'rxjs/add/operator/switchMap'

import {User} from './user.model';
import {UserService} from './user.service';
import {SecurityContextService} from '../shared/security-context.service';

@Component({
  selector: 'app-user-profile',
  styles: [],
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private securityContext: SecurityContextService) {
  }

  isMyProfile(): boolean {
    const currentUser = this.securityContext.getPrincipal();
    return !!this.user && this.user.id === currentUser.id
  }

  ngOnInit(): void {
    if (this.router.url === '/profile') {
      const currentUser = this.securityContext.getPrincipal();
      if (!!currentUser) {
        this.userService.getUser('' + currentUser.id)
          .subscribe(res => this.user = res)
      }
    } else {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.userService.getUser(params.get('id')))
        .subscribe(res => this.user = res);
    }
  }
}

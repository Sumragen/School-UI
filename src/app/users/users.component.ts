/**
 * Created by sumragen on 07.07.17.
 */
import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/map'

import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  users: object[] = [];

  constructor(private userService: UserService) {
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(response => {
        this.users = response
      })
  }
  ngOnInit(): void {
    this.getUsers()
}
}

import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import {User} from '../user.model';
import {fadeInAnimation} from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [fadeInAnimation]
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((response: User[]) => {
        this.users = response
      })
  }
}

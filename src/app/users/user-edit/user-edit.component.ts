import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';

import {SecurityContextService} from '../../shared/security-context.service';
import {UserService} from '../user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  userEditForm: FormGroup;

  constructor(private userService: UserService,
              private securityContext: SecurityContextService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params['id'])
      .subscribe(user => {
        this.user = user;
        this.userEditForm = this.fb.group({
          'username': [this.user.username || '', [Validators.required]],
          'firstName': [this.user.firstName || null, [Validators.required]],
          'lastName': [this.user.lastName || null, [Validators.required]],
          'email': [this.user.email || null, [Validators.required]]
        });
      });
  }

  onSubmit() {
    this.userService.updateUser(this.user.id, _.defaults(this.userEditForm.value, this.user))
      .subscribe(
        res => {
          this.updateUserData(res);
          this.emitCancel();
        },
        err => console.log(err)
      );
  }

  updateUserData(user) {
    const currentUserId = this.securityContext.getPrincipal().id;
    this.user = _.defaults(user, this.user);
    if (this.user.id === currentUserId) {
      this.securityContext.setPrincipal(this.user);
    }
  }

  emitCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}

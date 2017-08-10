import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import * as _ from 'lodash';
import {SecurityContextService} from '../../shared/security-context.service';
import {ActivatedRoute, Router} from '@angular/router';

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
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params['id'])
      .subscribe(user => {
        this.user = user;
        this.userEditForm = new FormGroup({
          'username': new FormControl(this.user.username || '', [Validators.required]),
          'firstName': new FormControl(this.user.firstName || null, [Validators.required]),
          'lastName': new FormControl(this.user.lastName || null, [Validators.required]),
          'email': new FormControl(this.user.email || null, [Validators.required])
        });
      });
  }

  onSubmit() {
    this.userService.updateUser(this.user.id.toString(), _.defaults(this.userEditForm.value, this.user))
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
    if (this.user.id == currentUserId) {
      this.securityContext.setPrincipal(this.user);
    }
  }

  emitCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}

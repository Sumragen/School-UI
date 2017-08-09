import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import * as _ from 'lodash';
import {SecurityContextService} from '../../shared/security-context.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  userEditForm: FormGroup;
  @Output('userEdited') userEdited = new EventEmitter<any>();

  constructor(private userService: UserService,
              private securityContext: SecurityContextService) {
  }

  ngOnInit() {
    this.userEditForm = new FormGroup({
      'username': new FormControl(this.user.username || null, [Validators.required]),
      'firstName': new FormControl(this.user.firstName || null, [Validators.required]),
      'lastName': new FormControl(this.user.lastName || null, [Validators.required]),
      'email': new FormControl(this.user.email || null, [Validators.required])
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
    this.userEdited.next()
  }

}

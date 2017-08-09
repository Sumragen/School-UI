import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  userEditForm: FormGroup;
  @Output('userEdited') userEdited = new EventEmitter<any>();

  constructor(private userService: UserService) {
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
          this.user = _.defaults(res, this.user);
          this.emitCancel();
        },
        err => console.log(err)
      );
  }

  emitCancel() {
    this.userEdited.next()
  }

}

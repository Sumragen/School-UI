import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../shared/animations/fade-in.animation';
import {UserService} from '../user.service';
import {User} from '../user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations: [fadeInAnimation]
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        id = params['id'];
        this.getUser(id);
      }
    );
    this.userService.userUpdated
      .subscribe(
        () => {
          this.userService.getUser(this.user.id.toString())
            .subscribe((user) => this.user = user)
        }
      )
  }

  getUser(id: string) {
    this.userService.getUser(id)
      .subscribe(
        (response: User) => {
          this.user = response;
        },
        err => {
          this.router.navigate(['user-not-found'])
        }
      )
  }

  goBack() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  toggleEditMode() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}

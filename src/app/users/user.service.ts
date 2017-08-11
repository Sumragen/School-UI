/**
 * Created by sumragen on 07.07.17.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {User} from './user.model';
import {Subject} from 'rxjs/Subject';
import {ApiService} from '../shared/api.service';

@Injectable()
export class UserService {
  userUpdated = new Subject<any>();

  constructor(private alterApiService: ApiService) {
  }

  getUsers(offset?: number | string, limit?: number | string): Observable<any> {
    return this.alterApiService.getUsers(offset, limit);
  }

  getUser(id: number | string): Observable<any> {
    return this.alterApiService.getUser(id);
  }

  updateUser(id: number | string, user: User): Observable<any> {
   return this.alterApiService.updateUser(id, user)
      .map((res) => {
        this.userUpdated.next();
        return res;
      });
  }
}

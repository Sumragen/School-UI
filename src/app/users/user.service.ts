/**
 * Created by sumragen on 07.07.17.
 */
import {Injectable} from '@angular/core';

import {ApiResolverService} from '../shared/api-resolver.service';
import {ApiService} from '../shared/api.service';
import {Observable} from 'rxjs/Observable';
import {User} from './user.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
  userUpdated = new Subject<any>();

  constructor(private apiService: ApiService,
              private apiResolver: ApiResolverService) {
  }

  getUsers(offset?: string, limit?: string): Observable<any> {
    const endpoint = this.apiResolver.get('getUsers'); // endpointParams: [offset, limit] <-- additional params (pagination)
    return this.apiService.request(endpoint.url, endpoint.request)
      .map(res => res.json());
  }

  getUser(id: string): Observable<any> {
    const endpoint = this.apiResolver.get('getUser', {endpointParams: [id]});
    return this.apiService.request(endpoint.url, endpoint.request)
      .map(res => res.json());
  }

  updateUser(id: string, user: User): Observable<any> {
    const endpoint = this.apiResolver.get('updateUser', {body: user, endpointParams: [id]});
    return this.apiService.request(endpoint.url, endpoint.request)
      .map(res => {
        this.userUpdated.next();
        return res.json()
      });
  }
}

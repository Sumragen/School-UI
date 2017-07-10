/**
 * Created by sumragen on 07.07.17.
 */
import {Injectable} from '@angular/core';

import {ApiResolverService} from '../shared/api-resolver.service';
import {ApiService} from '../shared/api.service';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable()
export class UserService {
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
}

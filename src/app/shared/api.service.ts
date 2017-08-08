/**
 * Created by sumragen on 05.07.17.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {Request} from './request.model';

import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {SecurityContextService} from './security-context.service';

@Injectable()
export class ApiService {
  constructor(private http: Http, private securityContext: SecurityContextService) {
  }

  request(url: string, endpoint: Request): Observable<any> {
    url = environment.apiBaseUrl + '/api' + url;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-sessionId', this.securityContext.getSessionID());
    return this.http.request(url, Object.assign({}, endpoint, {headers: new Headers(endpoint.headers || {})}));
  }
}

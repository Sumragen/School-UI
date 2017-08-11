import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {environment} from '../../environments/environment';
import {SecurityContextService} from './security-context.service';
import {LoginDto} from '../auth/login-dto.model';
import {RegisterDto} from '../auth/register-dto.model';
import {User} from '../users/user.model';

@Injectable()
export class AlternativeApiService {
  headers: Headers;
  options: RequestOptions;
  private _url: string = environment.apiBaseUrl + '/api';

  constructor(private http: Http,
              private securityContext: SecurityContextService) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'x-sessionId': this.securityContext.getSessionID()
    });
    this.options = new RequestOptions({headers: this.headers})
  }

  getUsers(offset?: string | number, limit?: string | number) {
    let url = this._url + '/users';
    if (!!offset && !!limit) {
      url += '?offset=' + offset + '&limit=' + limit;
    }
    return this.http.get(url, this.options)
      .map(res => res.json());
  }

  getUser(id: string | number) {
    return this.http.get(this._url + '/user/' + id)
      .map(res => res.json());
  }

  updateUser(id: string | number, user: User) {
    return this.http.put(this._url + '/user/' + id, user)
      .map(res => res.json());
  }

  signIn(loginDto: LoginDto) {
    return this.http.post(this._url + '/login', loginDto)
      .map(res => res.json());
  }

  register(registerDto: RegisterDto) {
    return this.http.post(this._url + '/user/add', registerDto)
      .map(res => res.json());
  }

  getEvent(id: string | number) {
    return this.http.get(this._url + '/event/' + id)
      .map(res => res.json());
  }

  getEvents() {
    return this.http.get(this._url + '/events')
      .map(res => res.json());
  }
}

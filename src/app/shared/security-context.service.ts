/**
 * Created by sumragen on 04.07.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {User} from '../users/user.model';

@Injectable()
export class SecurityContextService {
  constructor(private http: Http) {
  }

  getPrincipal(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  setPrincipal(user: User): User {
    user ? localStorage.setItem('currentUser', JSON.stringify(user))
      : localStorage.removeItem('currentUser');
    return user;
  }

  removePrincipal(): void {
    localStorage.removeItem('currentUser');
  }
  getSessionID(): string {
    return localStorage.getItem('sessionID');
  };
  setSessionID(id: string): string {
    localStorage.setItem('sessionID', id);
    return id;
  };
}

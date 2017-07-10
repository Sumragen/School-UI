/**
 * Created by sumragen on 05.07.17.
 */
import {Injectable} from '@angular/core';

const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

@Injectable()
export class ApiUrlDict {
  signIn(): object {
    return {
      url: '/login',
      method: METHODS.POST
    }
  };

  getUsers(): object {
    return {
      url: '/users',
      method: METHODS.GET
    }
  };

  getUser(id: string): object {
    return {
      method: METHODS.GET,
      url: '/user/' + id
    }
  }
}

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
  getEvents() {
    return {
      url: '/events',
      method: METHODS.GET
    }
  };

  getEvent(id: string): object {
    return {
      method: METHODS.GET,
      url: '/event/' + id
    }
  };

  signIn(): object {
    return {
      url: '/login',
      method: METHODS.POST
    }
  };

  register(): object {
    return {
      url: '/user/add',
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
  };

  updateUser(id: string): object {
    return {
      method: METHODS.PUT,
      url: '/user/' + id
    }
  }
}

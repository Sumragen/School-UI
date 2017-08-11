import {Injectable} from '@angular/core';

import {ApiService} from '../shared/api.service';

@Injectable()
export class EventsService {
  constructor(private apiService: ApiService) {
  }

  getEvents() {
    return this.apiService.getEvents();
  }

  getEvent(id: number | string) {
    return this.apiService.getEvent(id);
  }
}

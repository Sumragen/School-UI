import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {ApiResolverService} from '../shared/api-resolver.service';

@Injectable()
export class EventsService {
  constructor(private apiService: ApiService, private apiResolver: ApiResolverService) {
  }

  getEvents() {
    const endpoint = this.apiResolver.get('getEvents');
    return this.apiService.request(endpoint.url, endpoint.request)
      .map((res) => res.json())
  }
}

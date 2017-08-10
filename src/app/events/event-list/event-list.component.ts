import { Component, OnInit } from '@angular/core';

import {EventsService} from '../events.service';
import {Event} from './../event.model';
import {fadeInAnimation} from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  animations: [fadeInAnimation]
})
export class EventListComponent implements OnInit {
  events: Event[];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(res => this.events = res);
  }

}

import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';
import {Event} from '../event.model';
import {ActivatedRoute, Router} from '@angular/router';
import {fadeInAnimation} from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  animations: [fadeInAnimation]
})
export class EventDetailComponent implements OnInit {
  event: Event;
  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.eventService.getEvent(this.route.snapshot.params['id'])
      .subscribe((event) => this.event = event);
  }


  goBack() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  toggleEditMode() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}

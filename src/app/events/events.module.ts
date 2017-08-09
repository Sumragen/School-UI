/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventItemComponent } from './event-list/event-item/event-item.component';
import {EventsRoutingModule} from './events-routing.module';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {EventsService} from './events.service';

@NgModule({
  declarations: [EventListComponent, EventEditComponent, EventItemComponent, EventDetailComponent],
  imports: [CommonModule, EventsRoutingModule],
  exports: [RouterModule],
  providers: [EventsService]
})
export class EventsModule {
}

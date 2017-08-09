import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventListComponent} from './event-list/event-list.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EventEditComponent} from './event-edit/event-edit.component';

const eventRoutes: Routes = [{
  path: '', component: EventListComponent
}, {
  path: ':id', component: EventDetailComponent, children: [
    {
      path: 'edit', component: EventEditComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}

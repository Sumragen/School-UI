/**
 * Created by sumragen on 07.07.17.
 */
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {EventsComponent} from './events.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent}];

@NgModule({
  declarations: [EventsComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsModule {
}

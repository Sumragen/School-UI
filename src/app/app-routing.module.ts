/**
 * Created by sumragen on 04.07.17.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './core/home/home.component';

import {AuthGuard} from './shared/auth-guard.service';

const routes: Routes = [
  {
    path: 'home', canActivate: [AuthGuard], component: HomeComponent,
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'users', loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'events', loadChildren: './events/events.module#EventsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})

export class AppRoutingModule {
}

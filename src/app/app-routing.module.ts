/**
 * Created by sumragen on 04.07.17.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './core/home/home.component';

import {AuthGuard} from './shared/auth-guard.service';
import {UserNotFoundComponent} from './users/user-not-found/user-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'events',
    loadChildren: './events/events.module#EventsModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'user-not-found',
    component: UserNotFoundComponent,
    canActivate: [AuthGuard]
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

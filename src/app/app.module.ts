import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';

// Components
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header.component';

// Services
import {SecurityContextService} from './shared/security-context.service';
import {ApiService} from './shared/api.service';
import {AuthGuard} from './shared/auth-guard.service';
import {IsLoggedIn} from './shared/is-logged-in.service';
import {ApiResolverService} from './shared/api-resolver.service';
import {AppRoutingModule} from './app-routing.module';
import {ApiUrlDict} from './shared/api-url-dict';

// Modules
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {UsersModule} from './users/users.module';
import {EventsModule} from './events/events.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    UsersModule,
    EventsModule
  ],
  providers: [SecurityContextService, AuthGuard, IsLoggedIn, ApiService, ApiResolverService, ApiUrlDict],
  bootstrap: [AppComponent]
})
export class AppModule {
}

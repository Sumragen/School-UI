import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BsDropdownModule} from 'ngx-bootstrap';

// Components
import {AppComponent} from './app.component';

// Services
import {SecurityContextService} from './shared/security-context.service';
import {AppRoutingModule} from './app-routing.module';

// Modules
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {UsersModule} from './users/users.module';
import {AuthService} from './auth/auth.service';
import {ApiService} from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    UsersModule
  ],
  providers: [SecurityContextService, AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

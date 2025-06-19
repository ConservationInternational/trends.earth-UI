import { environment } from 'environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'rxjs';
import { LoginComponent } from "app/pages/login/login.component";
import { OauthRequestOptions } from "app/services/oauth-request.service";
import { AuthService, TokenService } from "app/services/auth.service";
import { RecoverPasswordComponent } from "app/pages/recover-password/recover-password.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

// Commented out as it's likely not compatible with Angular 18
// import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // SimpleNotificationsModule.forRoot(),
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [
    TokenService,
    AuthService,
    // Remove deprecated RequestOptions/OauthRequestOptions
    // { provide: RequestOptions, useClass: OauthRequestOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
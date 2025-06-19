import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LocationStrategy,
  PathLocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

import { LoginComponent } from "app/pages/login/login.component";
import { CheckLoginGuard } from "app/services/check-login.guard";
import { RecoverPasswordComponent } from "app/pages/recover-password/recover-password.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'private'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent
  },
  {
    path: 'private',
    loadChildren: () => import('app/pages/private/private.module').then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    CheckLoginGuard,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { TestComponent } from './test.component';

const routes: Routes = [
      {
        path: '404',
        component: P404Component,
        data: {
          title: 'Page 404',
        },
      },
      {
        path: '500',
        component: P500Component,
        data: {
          title: 'Page 500',
        },
      },
      {
        path: 'test',
        component: TestComponent,
        data: {
          title: 'Page Test',
        },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page',
        },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page',
        },
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

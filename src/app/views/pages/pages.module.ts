import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { TestComponent } from './test.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [ PagesRoutingModule, MatSidenavModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    TestComponent,
  ],
})
export class PagesModule { }

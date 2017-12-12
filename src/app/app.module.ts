import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import ServiceWorker
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent,
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent,
];

// Import components
import {
  XstrAsideComponent,
  XstrBreadcrumbsComponent,
  XstrFooterComponent,
  XstrHeaderComponent,
  XstrSidebarComponent,
  XstrSidebarFooterComponent,
  XstrSidebarFormComponent,
  XstrSidebarHeaderComponent,
} from './components';

const APP_COMPONENTS = [
  XstrAsideComponent,
  XstrBreadcrumbsComponent,
  XstrFooterComponent,
  XstrHeaderComponent,
  XstrSidebarComponent,
  XstrSidebarFooterComponent,
  XstrSidebarFormComponent,
  XstrSidebarHeaderComponent,
];

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES,
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES,
];

// Import 3rd party components
import 'hammerjs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Import routing module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

// Import API module
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
  ],
  imports: [
    ApiModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  /* providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }] */
  bootstrap: [AppComponent],
})
export class AppModule { }

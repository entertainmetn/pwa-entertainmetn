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

const XSTR_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent,
];

// Import components
import {
  XSTR_SIDEBAR_NAV,
  XstrAsideComponent,
  XstrBreadcrumbsComponent,
  XstrFooterComponent,
  XstrHeaderComponent,
  XstrSidebarComponent,
  XstrSidebarFooterComponent,
  XstrSidebarFormComponent,
  XstrSidebarHeaderComponent,
  XstrSidebarMinimizerComponent,
} from './components';

const XSTR_COMPONENTS = [
  XstrAsideComponent,
  XstrBreadcrumbsComponent,
  XstrFooterComponent,
  XstrHeaderComponent,
  XstrSidebarComponent,
  XstrSidebarFooterComponent,
  XstrSidebarFormComponent,
  XstrSidebarHeaderComponent,
  XstrSidebarMinimizerComponent,
  XSTR_SIDEBAR_NAV,
];

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES,
} from './directives';

const XSTR_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES,
];

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Import routing module
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './pages/home/home.component';

// Import API module
import { ApiModule } from './api/api.module';

@NgModule({
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
  declarations: [
    AppComponent,
    HomeComponent,
    ...XSTR_CONTAINERS,
    ...XSTR_COMPONENTS,
    ...XSTR_DIRECTIVES,
  ],
  /* providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }] */
  bootstrap: [AppComponent],
})
export class AppModule { }

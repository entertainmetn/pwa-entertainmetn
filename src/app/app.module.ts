import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdSidenavModule, MdToolbarModule} from '@angular/material';


// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  XstrAsideComponent,
  XstrBreadcrumbsComponent,
  XstrFooterComponent,
  XstrHeaderComponent,
  XstrSidebarComponent,
  XstrSidebarFooterComponent,
  XstrSidebarFormComponent,
  XstrSidebarHeaderComponent
} from './components';

const APP_COMPONENTS = [
  XstrAsideComponent,
  XstrBreadcrumbsComponent,
  XstrFooterComponent,
  XstrHeaderComponent,
  XstrSidebarComponent,
  XstrSidebarFooterComponent,
  XstrSidebarFormComponent,
  XstrSidebarHeaderComponent
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import 'hammerjs';

// Import routing module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdToolbarModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  /* providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }] */
  bootstrap: [AppComponent]
})
export class AppModule { }

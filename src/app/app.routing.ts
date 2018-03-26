import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from './../environments/environment';

import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { XstrShellComponent } from './containers/xstr-shell/xstr-shell.component';
import { HomeComponent } from './pages/home/home.component';

import { PagesModule } from './views/pages/pages.module';

const routes: Routes = [

  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        data: {
          title: 'Home',
        },
      },
      {
        path: 'dashboard',
        redirectTo: '',
      },
      {
        path: 'browse',
        loadChildren: 'app/pages/browse/browse.module#BrowseModule', // lazyLoaded Module(with routes)
      },
      {
        path: 'search',
        loadChildren: 'app/pages/search/search.module#SearchModule', // lazyLoaded Module(with routes)
      },
      {
        path: 'stats',
        loadChildren: 'app/pages/stats/stats.module#StatsModule', // lazyLoaded Module(with routes)
      },
      {
        path: 'settings',
        loadChildren: 'app/pages/settings/settings.module#SettingsModule', // lazyLoaded Module(with routes)
      },
    ],
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages',
    },
    loadChildren: './views/pages/pages.module#PagesModule',
  },
  {
    path: 'shell',
    component: XstrShellComponent,
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: ':mtype/:id',
        loadChildren: 'app/media-browser/media-browser.module#MediaBrowserModule',
      },
    ],
  },
  {
    path: '404',
    redirectTo: 'pages/404', // redirects unknown to 404
  },
  {
    path: '**',
    redirectTo: 'pages/404', // redirects unknown to 404
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: ( !environment.production ) }, // <-- debugging purposes only
    ),
    PagesModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

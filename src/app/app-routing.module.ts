import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { browser } from 'protractor';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsModule } from './pages/settings/settings.module'
// import { ErrorPageModule } from './pages/error-page/error-page.module';
// import { BrowseModule } from './pages/browse/browse.module';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        data: {
          title: 'Home'
        },
      },
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        redirectTo: '',
        // component: HomeComponent,
      },
      /* {
        path: 'home', // per moduleRoutes: 404,settings
        component: HomeComponent,
        pathMatch: 'full'
      }, */
      {
        path: 'browse',
        loadChildren: 'app/pages/browse/browse.module#BrowseModule' // lazyLoaded Module(with routes)
      },
      {
        path: 'search',
        loadChildren: 'app/pages/search/search.module#SearchModule' // lazyLoaded Module(with routes)
      },
      {
        path: 'stats',
        loadChildren: 'app/pages/stats/stats.module#StatsModule' // lazyLoaded Module(with routes)
      },
      /* {
        path: 'm/:mtype/:id',
        loadChildren: 'app/media-browser/media-browser.module#MediaBrowserModule'
      }, */
    ]
    // loadChildren: 'app/coreui/coreui.module#CoreuiModule' // lazyLoaded Module(with routes)
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: 'pages',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: ':mtype/:id',
        loadChildren: 'app/media-browser/media-browser.module#MediaBrowserModule'
      },
    ]
    // loadChildren: 'app/coreui/coreui.module#CoreuiModule' // lazyLoaded Module(with routes)
  },
  {
    path: '**',
    redirectTo: '/404' // redirects unknown to 404
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    SettingsModule,
    // ErrorPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

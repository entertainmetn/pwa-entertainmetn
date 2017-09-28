import { SimpleLayout } from './containers/simple-layout/simple-layout.component';
import { FullLayout } from './containers/full-layout/full-layout.component';
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
    component: FullLayout,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
        // loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'home', // per moduleRoutes: 404,settings
        component: HomeComponent,
        pathMatch: 'full'
      },
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
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
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
    component: SimpleLayout,
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
    component: FullLayout,
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

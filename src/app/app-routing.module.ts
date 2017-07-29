import { browser } from 'protractor';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsModule } from './pages/settings/settings.module'
import { ErrorPageModule } from './pages/error-page/error-page.module';
// import { BrowseModule } from './pages/browse/browse.module';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', // per moduleRoutes: 404,settings
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
    path: ':mtype/:id',
    loadChildren: 'app/pages/media/media.module#MediaModule'
  },
  {
    path: 'stats',
    loadChildren: 'app/pages/stats/stats.module#StatsModule' // lazyLoaded Module(with routes)
  },
  {
    path: '**',
    redirectTo: '/404' // redirects unknown to 404
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SettingsModule,
    ErrorPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

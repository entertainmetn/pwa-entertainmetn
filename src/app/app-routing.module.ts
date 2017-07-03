import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsModule } from 'app/pages/settings/settings.module'
import { ErrorPageModule } from 'app/pages/error-page/error-page.module';
import { HomeComponent } from 'app/pages/home/home.component';

const routes: Routes = [
  {
    path: '', // per moduleRoutes: 404,settings
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'stats',
    loadChildren: 'app/stats/stats.module#StatsModule' // lazyLoaded Module(with routes)
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

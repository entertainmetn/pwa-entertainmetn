import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsModule } from 'app/settings/settings.module'
import { ErrorPageModule } from 'app/error-page/error-page.module';
// import { SettingsComponent } from 'app/settings/settings.component'

const routes: Routes = [
  {
    path: '',
    children: []
  },
/*  {
    path: '404',
    loadChildren: () => ErrorPageModule
  },
  {
    path: 'settings',
    loadChildren: () => SettingsModule
    // pathMatch: 'full'
    // loadChildren: 'app/settings/settings.module#SettingsModule'
  },*/
  {
    path: 'stats',
    loadChildren: 'app/stats/stats.module#StatsModule'
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

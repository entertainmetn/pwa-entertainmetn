import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SettingsModule } from 'app/settings/settings.module'
// import { SettingsComponent } from 'app/settings/settings.component'

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'settings',
    loadChildren: 'app/settings/settings.module#SettingsModule'
  },
  {
    path: 'stats',
    loadChildren: 'app/stats/stats.module#StatsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
//    SettingsModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

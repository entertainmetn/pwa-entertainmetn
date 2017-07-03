import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

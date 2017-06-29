import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsComponent } from './stats.component';

const routes: Routes = [
  { path: '', component: StatsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

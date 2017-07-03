import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './error-page.component';

const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

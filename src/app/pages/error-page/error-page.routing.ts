import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error-page.component';

const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

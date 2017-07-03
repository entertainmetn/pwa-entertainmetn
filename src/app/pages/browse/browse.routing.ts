import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse.component';

const routes: Routes = [
  {
    path: 'mv',
    component: BrowseComponent
  },
  {
    path: 'tv',
    component: BrowseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

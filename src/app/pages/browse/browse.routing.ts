import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    data: {
      title: 'Browse'
    },
  }

];

export const BrowseRouting: ModuleWithProviders = RouterModule.forChild(routes);

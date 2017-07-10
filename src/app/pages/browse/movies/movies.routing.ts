import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'fff',
    component: MoviesComponent
  }
];

export const MoviesRouting: ModuleWithProviders = RouterModule.forChild(routes);

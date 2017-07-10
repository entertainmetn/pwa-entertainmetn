import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    children: [
      {
        path: 'mv/:id',
        loadChildren: 'app/pages/browse/movies/movies.module#MoviesModule'
      }
    ]
  }

];

export const BrowseRouting: ModuleWithProviders = RouterModule.forChild(routes);

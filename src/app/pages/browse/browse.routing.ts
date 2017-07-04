import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse.component';
import { MoviesComponent } from './movies/movies.component';
import { TVShowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent
  },
  {
    path: 'mv/:id',
    component: MoviesComponent
  },
  {
    path: 'tv/:id',
    component: TVShowsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

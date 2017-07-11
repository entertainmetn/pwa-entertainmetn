import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { WatchComponent } from 'app/pages/browse/movies/watch/watch.component';
import { OverViewComponent } from 'app/pages/browse/movies/over-view/over-view.component';
import { ReviewsComponent } from 'app/pages/browse/movies/reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      {
        path: 'w',
        component: WatchComponent
      },
      {
        path: '',
        component: OverViewComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      }
    ]
  }
];

export const MoviesRouting: ModuleWithProviders = RouterModule.forChild(routes);

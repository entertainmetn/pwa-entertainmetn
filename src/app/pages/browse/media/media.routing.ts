import { SeasonsComponent } from './seasons/seasons.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './media.component';
import { WatchComponent } from 'app/pages/browse/media/watch/watch.component';
import { OverViewComponent } from 'app/pages/browse/media/over-view/over-view.component';
import { ReviewsComponent } from 'app/pages/browse/media/reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
    children: [
      {
        path: '',
        component: OverViewComponent,
        pathMatch: 'full'
      },
      {
        path: 'w',
        component: WatchComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      },
      {
        path: ':se',
        component: SeasonsComponent
      }
    ]
  }
];

export const MediaRouting: ModuleWithProviders = RouterModule.forChild(routes);

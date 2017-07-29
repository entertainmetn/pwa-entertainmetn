import { SeasonComponent } from './season/season.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './media.component';
import { WatchComponent } from './watch/watch.component';
import { OverViewComponent } from './over-view/over-view.component';
import { ReviewsComponent } from './reviews/reviews.component';

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
        path: 'seasons',
        component: SeasonsComponent
      },
      {
        path: ':se',
        children: [
          {
            path: '',
            component: SeasonComponent,
            pathMatch: 'full'
          },
          {
            path: 'w',
            component: WatchComponent
          },
          {
            path: 'reviews',
            component: ReviewsComponent
          }
        ]
      }
    ]
  }
];

export const MediaRouting: ModuleWithProviders = RouterModule.forChild(routes);

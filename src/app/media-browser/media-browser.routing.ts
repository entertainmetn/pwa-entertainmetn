import { EpisodeIsValidGuard } from './guards/episode-is-valid.guard';
import { SeasonIsValidGuard } from './guards/season-is-valid.guard';
import { MediaIsValidGuard } from './guards/media-is-valid.guard';
import { EpisodeComponent } from './episode/episode.component';
import { SeasonComponent } from './season/season.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaBrowserComponent } from './media-browser.component';
import { WatchComponent } from './watch/watch.component';
import { OverViewComponent } from './over-view/over-view.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    component: MediaBrowserComponent,
    canActivate: [MediaIsValidGuard],
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
        canActivate: [SeasonIsValidGuard],
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
          },
          {
            path: ':ep',
            canActivate: [EpisodeIsValidGuard],
            children: [
              {
                path: '',
                component: EpisodeComponent,
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
    ]
  }
];

export const MediaBrowserRouting: ModuleWithProviders = RouterModule.forChild(routes);

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeIsValidGuard } from './guards/episode-is-valid.guard';
import { MediaIsValidGuard } from './guards/media-is-valid.guard';
import { SeasonIsValidGuard } from './guards/season-is-valid.guard';
import { MediaBrowserComponent } from './media-browser.component';
import { OverViewComponent } from './over-view/over-view.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SeasonComponent } from './season/season.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  {
    path: '',
    component: MediaBrowserComponent,
    canActivate: [MediaIsValidGuard],
    data: {
      title: 'Media',
    },
    children: [
      {
        path: '',
        component: OverViewComponent,
        pathMatch: 'full',
        data: {
          title: 'OverView',
        },
      },
      {
        path: 'w',
        component: WatchComponent,
        data: {
          title: 'Watch',
        },
      },
      {
        path: 'reviews',
        component: ReviewsComponent,
        data: {
          title: 'Reviews',
        },
      },
      {
        path: 'seasons',
        component: SeasonsComponent,
        data: {
          title: 'Seasons',
        },
      },
      {
        path: ':se',
        canActivate: [SeasonIsValidGuard],
        children: [
          {
            path: '',
            component: SeasonComponent,
            pathMatch: 'full',
          },
          {
            path: 'w',
            component: WatchComponent,
          },
          {
            path: 'reviews',
            component: ReviewsComponent,
          },
          {
            path: ':ep',
            canActivate: [EpisodeIsValidGuard],
            children: [
              {
                path: '',
                component: EpisodeComponent,
                pathMatch: 'full',
              },
              {
                path: 'w',
                component: WatchComponent,
              },
              {
                path: 'reviews',
                component: ReviewsComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const MediaBrowserRouting: ModuleWithProviders = RouterModule.forChild(routes);

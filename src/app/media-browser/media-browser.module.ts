import { MediaIsValidGuard } from './guards/media-is-valid.guard';
import { EpisodeComponent } from './episode/episode.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatButtonModule } from '@angular/material';

import { MediaBrowserRouting } from './media-browser.routing';
import { MediaBrowserComponent } from './media-browser.component';
import { OverViewComponent } from './over-view/over-view.component';
import { WatchComponent } from './watch/watch.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MediaBrowserService } from './media-browser.service';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './season/season.component';
import { SeasonIsValidGuard } from './guards/season-is-valid.guard';
import { EpisodeIsValidGuard } from './guards/episode-is-valid.guard';

@NgModule({
  imports: [
    MediaBrowserRouting,
    CommonModule,
    MatButtonModule,
    MatTabsModule
  ],
  declarations: [
    MediaBrowserComponent, OverViewComponent,
    WatchComponent, ReviewsComponent, SeasonsComponent, SeasonComponent, EpisodeComponent],
  providers: [MediaBrowserService, MediaIsValidGuard, SeasonIsValidGuard, EpisodeIsValidGuard]
})
export class MediaBrowserModule { }

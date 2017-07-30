import { EpisodeComponent } from './episode/episode.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule, MdButtonModule } from '@angular/material';

import { MediaBrowserRouting } from './media-browser.routing';
import { MediaBrowserComponent } from './media-browser.component';
import { OverViewComponent } from './over-view/over-view.component';
import { WatchComponent } from './watch/watch.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MediaBrowserService } from './media-browser.service';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './season/season.component';

@NgModule({
  imports: [
    MediaBrowserRouting,
    CommonModule,
    MdButtonModule,
    MdTabsModule
  ],
  declarations: [ MediaBrowserComponent, OverViewComponent, WatchComponent, ReviewsComponent, SeasonsComponent, SeasonComponent, EpisodeComponent],
  providers: [MediaBrowserService]
})
export class MediaBrowserModule { }

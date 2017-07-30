import { EpisodeComponent } from './episode/episode.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule, MdButtonModule } from '@angular/material';

import { MediaRouting } from './media.routing';
import { MediaComponent } from './media.component';
import { OverViewComponent } from './over-view/over-view.component';
import { WatchComponent } from './watch/watch.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MediaService } from './media.service';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './season/season.component';

@NgModule({
  imports: [
    MediaRouting,
    CommonModule,
    MdButtonModule,
    MdTabsModule
  ],
  declarations: [ MediaComponent, OverViewComponent, WatchComponent, ReviewsComponent, SeasonsComponent, SeasonComponent, EpisodeComponent],
  providers: [MediaService]
})
export class MediaModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRouting } from './media.routing';
import { MediaComponent } from './media.component';
import { OverViewComponent } from './over-view/over-view.component';
import { WatchComponent } from './watch/watch.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MediaService } from './media.service';

@NgModule({
  imports: [
    MediaRouting,
    CommonModule,
  ],
  declarations: [ MediaComponent, OverViewComponent, WatchComponent, ReviewsComponent],
  providers: [MediaService]
})
export class MediaModule { }

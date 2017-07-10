import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRouting } from './movies.routing';
import { MoviesComponent } from './movies.component';
import { OverViewComponent } from './over-view/over-view.component';
import { WatchComponent } from './watch/watch.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  imports: [
    MoviesRouting,
    CommonModule,
  ],
  declarations: [ MoviesComponent, OverViewComponent, WatchComponent, ReviewsComponent]
})
export class MoviesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse.component';
import { routing } from './browse.routing';
import { MoviesComponent } from './movies/movies.component';
import { TVShowsComponent } from './tvshows/tvshows.component';
import { BrowseService } from './browse.service';
import { SeasonComponent } from './tvshows/season/season.component';
import { EpisodeComponent } from './tvshows/season/episode/episode.component'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [BrowseComponent, MoviesComponent, TVShowsComponent, SeasonComponent, EpisodeComponent],
  providers: [BrowseService]
})
export class BrowseModule { }

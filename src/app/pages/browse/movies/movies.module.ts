import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRouting } from './movies.routing';
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    MoviesRouting,
    CommonModule,
  ],
  declarations: [ MoviesComponent]
})
export class MoviesModule { }

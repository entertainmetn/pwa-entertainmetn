import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse.component';
import { routing } from './browse.routing'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [BrowseComponent]
})
export class BrowseModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse.component';
import { BrowseRouting } from './browse.routing';
import { BrowseService } from './browse.service';

@NgModule({
  imports: [
    BrowseRouting,
    CommonModule,
  ],
  declarations: [BrowseComponent],
  providers: [BrowseService]
})
export class BrowseModule { }

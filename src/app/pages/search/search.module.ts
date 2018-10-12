import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchRouting } from './search.routing';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    SearchRouting,
    CommonModule,
  ],
  declarations: [SearchComponent],
  providers: [SearchService],
})
export class SearchModule { }

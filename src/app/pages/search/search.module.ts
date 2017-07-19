import { SearchRouting } from './search.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    SearchRouting,
    CommonModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }

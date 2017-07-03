import { NgModule } from '@angular/core';

import { StatsComponent } from './stats.component';
import { routing } from './stats.routing';

@NgModule({
  imports: [
    routing
    ],
  declarations: [
    StatsComponent
    ]
})
export class StatsModule { }

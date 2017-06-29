import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { routing } from './settings.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }

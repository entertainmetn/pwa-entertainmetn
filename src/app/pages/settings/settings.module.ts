import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { routing } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule { }

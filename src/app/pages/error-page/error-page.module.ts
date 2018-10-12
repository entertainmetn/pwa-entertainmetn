import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorPageComponent } from './error-page.component';
import { routing } from './error-page.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [ErrorPageComponent],
})
export class ErrorPageModule { }

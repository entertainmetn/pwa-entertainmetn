import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiConfiguration } from './api-configuration';

import { ApplicationInfoControllerService } from './services/application-info-controller.service';
import { GenericInfoControllerService } from './services/generic-info-controller.service';
import { XstrMovieControllerService } from './services/xstr-movie-controller.service';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
   GenericInfoControllerService,
   ApplicationInfoControllerService,
   XstrMovieControllerService,
  ],
})
export class ApiModule { }

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { GenericInfoControllerService } from './services/generic-info-controller.service';
import { ApplicationInfoControllerService } from './services/application-info-controller.service';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
   GenericInfoControllerService,
   ApplicationInfoControllerService
  ],
})
export class ApiModule { }

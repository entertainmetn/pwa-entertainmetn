/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

import { ApplicationInfo } from '../models/application-info';

/**
 * Application Info Controller
 */
 @Injectable()
export class ApplicationInfoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param name name
   * @return OK
   */
   applicationInfoUsingGETResponse(name?: string): Observable<HttpResponse<ApplicationInfo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set("name", name.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ApplicationInfo = null;
        _body = _resp.body as ApplicationInfo
        return _resp.clone({body: _body}) as HttpResponse<ApplicationInfo>;
      })
    );
  }

  /**
   * @param name name
   * @return OK
   */
   applicationInfoUsingGET(name?: string): Observable<ApplicationInfo> {
    return this.applicationInfoUsingGETResponse(name).pipe(
      map(_r => _r.body)
    );
  }
}

export module ApplicationInfoControllerService {
}

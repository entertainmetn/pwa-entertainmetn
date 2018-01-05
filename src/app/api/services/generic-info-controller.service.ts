/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { GenericInfo } from '../models/generic-info';


@Injectable()
export class GenericInfoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   */
  genericInfoUsingGETResponse(): Observable<HttpResponse<GenericInfo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/`,
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
        let _body: GenericInfo = null;
        _body = _resp.body as GenericInfo
        return _resp.clone({body: _body}) as HttpResponse<GenericInfo>;
      })
    );
  }

  /**
   */
  genericInfoUsingGET(): Observable<GenericInfo> {
    return this.genericInfoUsingGETResponse().pipe(
      map(_r => _r.body)
    );
  }}

export module GenericInfoControllerService {
}

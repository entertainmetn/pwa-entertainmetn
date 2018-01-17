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

import { XstrMovie } from '../models/xstr-movie';

/**
 * Xstr Movie Controller
 */
 @Injectable()
export class XstrMovieControllerService extends BaseService {
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
   xstrMovieListUsingGETResponse(name?: string): Observable<HttpResponse<XstrMovie[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set("name", name.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/mv/list`,
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
        let _body: XstrMovie[] = null;
        _body = _resp.body as XstrMovie[]
        return _resp.clone({body: _body}) as HttpResponse<XstrMovie[]>;
      })
    );
  }

  /**
   * @param name name
   * @return OK
   */
   xstrMovieListUsingGET(name?: string): Observable<XstrMovie[]> {
    return this.xstrMovieListUsingGETResponse(name).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id id
   * @return OK
   */
   xstrMovieUsingGETResponse(id: number): Observable<HttpResponse<XstrMovie>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/mv/${id}`,
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
        let _body: XstrMovie = null;
        _body = _resp.body as XstrMovie
        return _resp.clone({body: _body}) as HttpResponse<XstrMovie>;
      })
    );
  }

  /**
   * @param id id
   * @return OK
   */
   xstrMovieUsingGET(id: number): Observable<XstrMovie> {
    return this.xstrMovieUsingGETResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module XstrMovieControllerService {
}

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

import { Movie } from '../models/movie';
import { ImdbRating } from '../models/imdb-rating';
import { TvShow } from '../models/tv-show';

/**
 * Movie Controller
 */
 @Injectable()
export class MovieControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
   xstrMovieListUsingGETResponse(): Observable<HttpResponse<Movie[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
        let _body: Movie[] = null;
        _body = _resp.body as Movie[]
        return _resp.clone({body: _body}) as HttpResponse<Movie[]>;
      })
    );
  }

  /**
   * @return OK
   */
   xstrMovieListUsingGET(): Observable<Movie[]> {
    return this.xstrMovieListUsingGETResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @return OK
   */
   saveMovieUsingGETResponse(): Observable<HttpResponse<ImdbRating>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/mv/save`,
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
        let _body: ImdbRating = null;
        _body = _resp.body as ImdbRating
        return _resp.clone({body: _body}) as HttpResponse<ImdbRating>;
      })
    );
  }

  /**
   * @return OK
   */
   saveMovieUsingGET(): Observable<ImdbRating> {
    return this.saveMovieUsingGETResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id id
   * @return OK
   */
   movieUsingGETResponse(id: number): Observable<HttpResponse<Movie>> {
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
        let _body: Movie = null;
        _body = _resp.body as Movie
        return _resp.clone({body: _body}) as HttpResponse<Movie>;
      })
    );
  }

  /**
   * @param id id
   * @return OK
   */
   movieUsingGET(id: number): Observable<Movie> {
    return this.movieUsingGETResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id id
   * @return OK
   */
   fullMovieUsingGETResponse(id: number): Observable<HttpResponse<Movie>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/mv/${id}/info`,
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
        let _body: Movie = null;
        _body = _resp.body as Movie
        return _resp.clone({body: _body}) as HttpResponse<Movie>;
      })
    );
  }

  /**
   * @param id id
   * @return OK
   */
   fullMovieUsingGET(id: number): Observable<Movie> {
    return this.fullMovieUsingGETResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @return OK
   */
   saveTvShowUsingGETResponse(): Observable<HttpResponse<ImdbRating>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/tv/save`,
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
        let _body: ImdbRating = null;
        _body = _resp.body as ImdbRating
        return _resp.clone({body: _body}) as HttpResponse<ImdbRating>;
      })
    );
  }

  /**
   * @return OK
   */
   saveTvShowUsingGET(): Observable<ImdbRating> {
    return this.saveTvShowUsingGETResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id id
   * @return OK
   */
   tvshowUsingGETResponse(id: number): Observable<HttpResponse<TvShow>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/tv/${id}`,
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
        let _body: TvShow = null;
        _body = _resp.body as TvShow
        return _resp.clone({body: _body}) as HttpResponse<TvShow>;
      })
    );
  }

  /**
   * @param id id
   * @return OK
   */
   tvshowUsingGET(id: number): Observable<TvShow> {
    return this.tvshowUsingGETResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module MovieControllerService {
}

import { LoadRouter } from './media-is-valid.guard';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface LoadRouter {
  loadRouter(router: Router): boolean;
}

@Injectable()
export class MediaIsValidGuard implements CanActivate {

  constructor(private router: Router) { }
  /* istanbul ignore next */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!next || !state) { return false }
    let isValid = true;
    let mtype: string;
    let id: string;
    console.log('guard checked');
    mtype = next.params.mtype;
    id = next.params.id;
    // isValid = !!next.params.mtype && !isNaN(+next.params.id);
    isValid = !!next.params.mtype && mtype.length === 2;
    isValid = isValid && !isNaN(+id);
    console.log(mtype);
    console.log(id);
    if (isValid) { return true }
    this.router.navigate(['/404']);
    return false;
  }
}

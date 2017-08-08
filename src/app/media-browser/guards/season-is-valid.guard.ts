import { MediaBrowserService } from '../media-browser.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeasonIsValidGuard implements CanActivate {

  constructor(private router: Router, private mediaBrowserService: MediaBrowserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (isNaN(+next.params.se)) {
      this.router.navigate(['/404']);
      return false
    }
    this.mediaBrowserService.setSeason(next.params.se);
    console.log('seasonGuard sets season ');
    console.log(this.mediaBrowserService.activeMedia.getMediaInfo());

    return true;
  }
}

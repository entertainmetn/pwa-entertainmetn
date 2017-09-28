import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EpisodeIsValidGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('EpisodeIsValidGuard =>');
    console.log('params.ep = ' + next.params.ep + ' isValid = ' + !isNaN(+next.params.ep));
    if (isNaN(+next.params.ep)) {
      this.router.navigate(['/pages/404']);
      return false
    }
    return true;
  }
}

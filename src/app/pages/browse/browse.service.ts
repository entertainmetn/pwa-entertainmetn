import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class BrowseService {

  id = 'default string';
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        console.log('eror params null');
        console.log(router);
        console.log(route);
        return; }
      this.id = params['id'];
      // if (this.id.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
    });
}

  public getIDfromActiveRoute(): string {
    if (this.id.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
    return this.id;
  }

  public restRoute(): void {
    this.sub.unsubscribe();
  }

}

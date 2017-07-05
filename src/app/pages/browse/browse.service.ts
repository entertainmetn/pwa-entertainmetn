import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class BrowseService {

  private id; string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        console.log('eror params null');
        // console.log(router);
        console.log(route);
        this.id = params['id'];
      } else {
        this.id = 'default';
      }
      // if (this.id.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
    });
  }

  public getIDfromActiveRoute(): string {
    // if (this.id.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
    return this.id;
  }

  public restRoute(): void {
    this.sub.unsubscribe();
  }

}

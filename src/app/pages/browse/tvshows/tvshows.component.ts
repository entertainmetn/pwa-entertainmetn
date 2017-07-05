import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'xstr-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TVShowsComponent implements OnInit, OnDestroy {

  id = 'default';
  season = 'default';
  episode = 'default';
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number :)
      this.season = params['se'];
      this.episode = params['ep'];
      // In a real app: dispatch action to load the details here.
      if (this.id.toString().startsWith('d')) { this.router.navigateByUrl('/404') }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

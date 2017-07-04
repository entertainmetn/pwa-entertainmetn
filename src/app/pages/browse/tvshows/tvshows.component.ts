import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowseService } from './../browse.service';

@Component({
  selector: 'xstr-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TVShowsComponent implements OnInit, OnDestroy {

  id = 'default string';
  private sub: any;

  constructor(private browseService: BrowseService) { }

  ngOnInit() {
    this.id = this.browseService.getIDfromActiveRoute();
  }

  ngOnDestroy() {
    this.browseService.restRoute();
  }

}

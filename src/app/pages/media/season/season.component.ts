import { Router, ActivatedRoute } from '@angular/router';
import { MediaService } from './../media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xstr-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  info: string;
  se: string;
  private sub: any;
  constructor(/* private route: ActivatedRoute,
    private mediaService: MediaService */) {
    this.info = 'AAAA';
  }

  ngOnInit() {
    /* this.sub = this.route.params.subscribe(params => {
      this.se = params['se'];
      if (!!params['se']) {
        console.log('jckpjkpjkljkkjjkpjkjkj,k,');
        this.mediaService.getSeason(this.se);
      }
    }); */
    this.info += 'BBBB' // this.mediaService.activeMedia.mediaInfo;
  }

}

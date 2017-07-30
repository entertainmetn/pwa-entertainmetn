import { Router, ActivatedRoute } from '@angular/router';
import { MediaService } from './../media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xstr-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  info: string;
  se: string;
  private sub: any;
  constructor(private route: ActivatedRoute) {
    this.info = 'Episode ID = ';
  }

  ngOnInit() {
    let epId = '';
    this.sub = this.route.params.subscribe(params => {
      this.se = params['ep'];
      if (!!params['ep']) {
        epId = params['ep'];
        // console.log('jckpjkpjkljkkjjkpjkjkj,k,');
      }
    });
    this.info += epId; // this.mediaService.activeMedia.mediaInfo;
  }

}

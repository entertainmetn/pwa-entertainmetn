import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute) {
    this.info = 'Season ID = ';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.se = params['se'];
    });
    this.info += this.se;
  }

}

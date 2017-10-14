import { MatSidenavModule, MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'xstr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('demosidenav') public myNav: MatSidenav;
  title = 'xstr';
  pixelWidth: number;
  pixelHeight: number;
  sideNavOpened = true;
  sideNavMode = 'side';
  sideNavPos = 'start';

  constructor() {
    this.pixelWidth = document.defaultView.innerWidth;
    this.pixelHeight = document.defaultView.innerHeight;
    console.log('size intialized');
    this.sideNavDynamic();
  }

  onResize(event) {
    // console.log(event);
    // console.log('width:' + event.target.innerWidth);
    // console.log('height:' + event.target.innerHeight);

    this.pixelWidth = event.target.innerWidth;
    this.pixelHeight = event.target.innerHeight;
    this.sideNavDynamic();
  }
  sideNavDynamic() {
    console.log('side nav called ********************');
    if (this.pixelWidth > 600) {
      this.sideNavOpened = true;
      this.sideNavMode = 'side';
      this.sideNavPos = 'start';
    } else {
      /* istanbul ignore next */
      if (this.myNav) { this.myNav.close(); }
      this.sideNavOpened = false;
      this.sideNavMode = 'over';
      this.sideNavPos = 'end';
    }
  }
}

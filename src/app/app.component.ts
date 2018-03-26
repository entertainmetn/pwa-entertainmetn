import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'xstr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('demosidenav') public myNav: MatSidenav;
  title = 'xstr';
  pixelWidth: number;
  pixelHeight: number;
  sideNavOpened = true;
  sideNavMode = 'side';
  sideNavPos = 'start';

  constructor(private router: Router) {
    this.pixelWidth = document.defaultView.innerWidth;
    this.pixelHeight = document.defaultView.innerHeight;
    console.log('size intialized');
    this.sideNavDynamic();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
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

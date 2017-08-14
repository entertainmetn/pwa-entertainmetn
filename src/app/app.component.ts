import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'xstr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xstr';
  pixelWidth: number;
  pixelHeight: number;
  sideNavOpened = true;

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
    if (this.pixelWidth > 600) {
      this.sideNavOpened = true;
    } else {
      this.sideNavOpened = false;
    }
  }
}

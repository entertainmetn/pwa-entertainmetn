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

  constructor() {
    this.pixelWidth = document.defaultView.innerWidth;
    this.pixelHeight = document.defaultView.innerHeight;
    console.log('size intialized');
  }

  onResize(event) {
    console.log(event);
    console.log( 'width:' + event.target.innerWidth);
    console.log( 'height:' + event.target.innerHeight);

    this.pixelWidth = event.target.innerWidth;
    this.pixelHeight = event.target.innerHeight;
  }
}

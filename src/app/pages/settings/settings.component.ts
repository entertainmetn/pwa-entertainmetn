import { Component, OnInit } from '@angular/core';

/*import TileLayer from 'ol/layer/tile';
import Map from 'ol/map';
import XYZ from 'ol/source/xyz';
import View from 'openlayers';*/

@Component({
  selector: 'xstr-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  //public olmap: Map;
  constructor() { }

  ngOnInit() {
    /*this.olmap = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });*/
  }

}

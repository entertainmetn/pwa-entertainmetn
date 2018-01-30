import { Component, OnInit } from '@angular/core';
import { GenericInfo } from '../../api/models';
import { environment } from './../../../environments/environment';
import { GenericInfoControllerService } from './../../api/services/generic-info-controller.service';

@Component({
  selector: 'xstr-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  public apiURL: string;
  public isProd: string;
  public name = 'a';
  public version = 'b';
  public description = 'c';

  constructor(private genericInfoControllerService: GenericInfoControllerService) {

    this.apiURL = environment.apiURL;
    this.isProd = '' + environment.production;
  }

  ngOnInit() {
    this.genericInfoControllerService.genericInfoUsingGET()
      .subscribe(
        (genericInfo) => {
              this.name = genericInfo.name;
              this.version = genericInfo.version;
              this.description = genericInfo.description;
  },
        (err) => console.log('error block'),
        () => console.log('done block'),
      );
  }

}

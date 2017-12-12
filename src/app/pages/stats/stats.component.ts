import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { GenericInfo } from '../../api/models';
import { GenericInfoControllerService } from './../../api/services/generic-info-controller.service';

@Component({
  selector: 'xstr-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  public genericInfo: GenericInfo;
  public apiURL: string;
  constructor(private genericInfoControllerService: GenericInfoControllerService) {
    this.genericInfo = new GenericInfo();
    this.genericInfo.name = 'a';
    this.genericInfo.version = 'b';
    this.genericInfo.description = 'c';
    this.apiURL = environment.apiURL;
  }

  ngOnInit() {
    this.genericInfoControllerService.genericInfoUsingGET()
      .subscribe(
        (genericInfo) => this.genericInfo = genericInfo,
        (err) => console.log('error block'),
        () => console.log('done block'),
      );
  }

}

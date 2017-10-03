import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'xstr-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  paramString: string;

  constructor(private route: ActivatedRoute) {

    this.paramString = 'test params =';
    this.route.queryParamMap.forEach(
      params => {
        // console.log('queryparam changed')
        params.keys.forEach(paramkey => {
          this.paramString = this.paramString + ' ' + paramkey + ' = ' + params.getAll(paramkey);
          // console.log('param found => ' + paramkey + ' = ' + params.get(paramkey));
        });

      }
    );
  }

  ngOnInit() {
  }

}

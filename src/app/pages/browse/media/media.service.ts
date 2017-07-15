import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {
  /* mediaType: {
    routeUrl: string;
    name: string;
  } */
  mediaTypes: MediaType[];
  id: number;


  constructor() {
  }

  public createMedia(mediaType: string, id: string): boolean {
    this.mediaTypes = new Array();
    this.mediaTypes.push(new MediaType('mv', 'Movies'));
    this.mediaTypes.push(new MediaType('tv', 'TV Shows'));
    this.mediaTypes.push(new MediaType('an', 'Anime'));
    this.mediaTypes.push(new MediaType('sm', 'Short Movies'));
    let isValid = false;
    const mType = this.mediaTypes.find(tmediaType => tmediaType.routeUrl === mediaType);
    isValid = !!(mType) && !isNaN(+id);
    console.log('find media');
    console.log(mType);
    console.log(!!(mType));
    console.log('isvalid', isValid);
    return isValid;
    // return (this.mediaTypes.find(tmediaType => tmediaType.routeUrl === mediaType)) && !isNaN(+id);
  }

}
class MediaType {
    constructor(public routeUrl: string, public name: string) {
        this.routeUrl = routeUrl;
        this.name = name;
    }
}
// enum MediaType { 'mv', 'tv', 'an', 'am', 'sm' }

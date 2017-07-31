import { Injectable } from '@angular/core';

@Injectable()
export class MediaBrowserService {
  /* mediaType: {
    routeUrl: string;
    name: string;
  } */
  mediaTypes: MediaType[];
  id: number;
  activeMedia: ActiveMedia;

  constructor() {
    this.destroy();
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
    // console.log('find media');
    // console.log(mType);
    // console.log(!!(mType));
    // console.log('isvalid', isValid);
    // if (isValid) {
    this.activeMedia = new ActiveMedia(mType, +id);
    // }
    return isValid;
    // return (this.mediaTypes.find(tmediaType => tmediaType.routeUrl === mediaType)) && !isNaN(+id);
  }

  /*   public getSeason(se: string): boolean {
      let isValid = false;
      // console.log('testing season ' + se + ' => ' + +se);
      if (!isNaN(+se)) {
        // console.log('Season found');
        isValid = true;
        this.activeMedia.mediaInfo += ' --- se ' + se;
      }
      return isValid;
    } */

  public destroy() {
    // console.log('# Media Object destroyed');
    this.id = null;
    this.mediaTypes = null;
  }

}
class MediaType {
  constructor(public routeUrl: string, public name: string) {
    this.routeUrl = routeUrl;
    this.name = name;
  }
}
class ActiveMedia {
  public mediaInfo: string;
  public seasonInfo: string;
  public episodeInfo: string;
  constructor(private mediaType: MediaType, private id: number) {
    this.mediaInfo = mediaType.name + ' --- url = ' + mediaType.routeUrl + ' --- id = ' + this.id;
  }
  setSeasonInfo(seasonInfo: string) {
    this.seasonInfo = seasonInfo;
  }
  setEpisodeInfo(episodeInfo: string) {
    this.episodeInfo = episodeInfo;
  }
  getMediaInfo(): string {
    let info = this.mediaInfo;
    if (this.seasonInfo) { info += ' --- se = ' + this.seasonInfo }
    if (this.episodeInfo) { info += ' --- ep = ' + this.episodeInfo }
    return info;
  }
}

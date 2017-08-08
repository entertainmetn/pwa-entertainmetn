import { ActivatedRoute } from '@angular/router';
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
    this.mediaTypes = new Array();
    this.mediaTypes.push(new MediaType('mv', 'Movies'));
    this.mediaTypes.push(new MediaType('tv', 'TV Shows'));
    this.mediaTypes.push(new MediaType('an', 'Anime'));
    this.mediaTypes.push(new MediaType('sm', 'Short Movies'));
  }

  public setActiveMedia(routeUrl: string, genreName: string, id: number) {
    console.log('*************      new media Created');
    this.activeMedia = new ActiveMedia(new MediaType(routeUrl, genreName), id);
  }
  public setSeason(id: string) {
    this.activeMedia.setSeasonID(id);
  }
  public setEpisode(id: string) {
    this.activeMedia.setEpisodeID(id);
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
  public seasonID: string;
  public episodeID: string;
  constructor(private mediaType: MediaType, private id: number) {
    this.mediaInfo = mediaType.name + ' --- url = ' + mediaType.routeUrl + ' --- id = ' + this.id;
  }
  setSeasonID(seasonID: string) {
    this.seasonID = seasonID;
  }
  setEpisodeID(episodeID: string) {
    this.episodeID = episodeID;
  }
  getMediaInfo(): string {
    let info = this.mediaInfo;
    if (this.seasonID) { info += ' --- se = ' + this.seasonID }
    if (this.episodeID) { info += ' --- ep = ' + this.episodeID }
    return info;
  }
}

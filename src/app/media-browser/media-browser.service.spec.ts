import { TestBed, inject } from '@angular/core/testing';

import { MediaBrowserService } from './media-browser.service';

describe('MediaBrowserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaBrowserService]
    });
  });

  it('should create media-browser', inject([MediaBrowserService], (service: MediaBrowserService) => {
    expect(service.createMedia('tv', '11')).toBeTruthy();
  }));

  it('should be created', inject([MediaBrowserService], (service: MediaBrowserService) => {
    expect(service).toBeTruthy();
  }));
});

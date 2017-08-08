import { TestBed, inject } from '@angular/core/testing';

import { MediaBrowserService } from './media-browser.service';

describe('MediaBrowserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaBrowserService]
    });
  });

  it('should be created', inject([MediaBrowserService], (service: MediaBrowserService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { MediaService } from './media.service';

describe('MediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaService]
    });
  });

  it('should create media', inject([MediaService], (service: MediaService) => {
    expect(service.createMedia('tv', '11')).toBeTruthy();
  }));

  it('should be created', inject([MediaService], (service: MediaService) => {
    expect(service).toBeTruthy();
  }));
});

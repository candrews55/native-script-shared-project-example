import { TestBed } from '@angular/core/testing';

import { WebDataStorageService } from './data-storage.service';

describe('WebDataStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebDataStorageService = TestBed.get(WebDataStorageService);
    expect(service).toBeTruthy();
  });
});

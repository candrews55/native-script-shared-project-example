import { TestBed } from '@angular/core/testing';

import { MobileDataStorageService } from './data-storage.service.tns';

describe('MobileDataStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileDataStorageService = TestBed.get(MobileDataStorageService);
    expect(service).toBeTruthy();
  });
});

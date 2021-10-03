import { TestBed } from '@angular/core/testing';

import { AgUtilsService } from './ag-utils.service';

describe('AgUtilsService', () => {
  let service: AgUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

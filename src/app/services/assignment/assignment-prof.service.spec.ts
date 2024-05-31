import { TestBed } from '@angular/core/testing';

import { AssignmentProfService } from './assignment-prof.service';

describe('AssignmentProfService', () => {
  let service: AssignmentProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

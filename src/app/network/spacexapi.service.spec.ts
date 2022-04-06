

import { SpacexapiService } from './spacexapi.service';
import { TestBed } from '@angular/core/testing';
describe('SpacexapiService', () => {
  let service: SpacexapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

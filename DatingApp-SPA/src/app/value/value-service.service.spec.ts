/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValueServiceService } from './value-service.service';

describe('Service: ValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueServiceService]
    });
  });

  it('should ...', inject([ValueServiceService], (service: ValueServiceService) => {
    expect(service).toBeTruthy();
  }));
});

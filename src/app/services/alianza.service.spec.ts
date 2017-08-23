/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlianzaService } from './alianza.service';

describe('AlianzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlianzaService]
    });
  });

  it('should ...', inject([AlianzaService], (service: AlianzaService) => {
    expect(service).toBeTruthy();
  }));
});

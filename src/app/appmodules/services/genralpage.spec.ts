import { TestBed } from '@angular/core/testing';

import { Genralpage } from './genralpage';

describe('Genralpage', () => {
  let service: Genralpage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Genralpage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

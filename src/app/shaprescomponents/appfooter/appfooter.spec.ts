import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appfooter } from './appfooter';

describe('Appfooter', () => {
  let component: Appfooter;
  let fixture: ComponentFixture<Appfooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appfooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appfooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errorpage } from './errorpage';

describe('Errorpage', () => {
  let component: Errorpage;
  let fixture: ComponentFixture<Errorpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Errorpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errorpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

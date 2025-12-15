import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appheader } from './appheader';

describe('Appheader', () => {
  let component: Appheader;
  let fixture: ComponentFixture<Appheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

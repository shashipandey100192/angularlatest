import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blankpage } from './blankpage';

describe('Blankpage', () => {
  let component: Blankpage;
  let fixture: ComponentFixture<Blankpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blankpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blankpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

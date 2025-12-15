import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainpage } from './mainpage';

describe('Mainpage', () => {
  let component: Mainpage;
  let fixture: ComponentFixture<Mainpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

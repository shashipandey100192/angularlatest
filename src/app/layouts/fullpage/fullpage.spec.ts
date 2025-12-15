import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fullpage } from './fullpage';

describe('Fullpage', () => {
  let component: Fullpage;
  let fixture: ComponentFixture<Fullpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fullpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fullpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

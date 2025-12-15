import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlogin } from './userlogin';

describe('Userlogin', () => {
  let component: Userlogin;
  let fixture: ComponentFixture<Userlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userlogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

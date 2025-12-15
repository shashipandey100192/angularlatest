import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userregistor } from './userregistor';

describe('Userregistor', () => {
  let component: Userregistor;
  let fixture: ComponentFixture<Userregistor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userregistor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userregistor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

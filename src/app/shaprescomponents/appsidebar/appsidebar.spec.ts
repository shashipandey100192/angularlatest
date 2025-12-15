import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appsidebar } from './appsidebar';

describe('Appsidebar', () => {
  let component: Appsidebar;
  let fixture: ComponentFixture<Appsidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appsidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appsidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

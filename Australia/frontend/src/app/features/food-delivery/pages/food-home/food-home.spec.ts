import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHome } from './food-home';

describe('FoodHome', () => {
  let component: FoodHome;
  let fixture: ComponentFixture<FoodHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodHome],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

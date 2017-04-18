import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {HerbIngredientsComponent} from "./herb-ingredients.component";

describe('HerbIngredientsComponent', () => {
  let component: HerbIngredientsComponent;
  let fixture: ComponentFixture<HerbIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HerbIngredientsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {FnDashboardComponent} from "./fn-dashboard.component";

describe('FnDashboardComponent', () => {
  let component: FnDashboardComponent;
  let fixture: ComponentFixture<FnDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FnDashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

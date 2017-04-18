import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {FnSearchComponent} from "./fn-search.component";

describe('FnSearchComponent', () => {
  let component: FnSearchComponent;
  let fixture: ComponentFixture<FnSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FnSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

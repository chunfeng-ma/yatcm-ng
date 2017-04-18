import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {FnContactComponent} from "./fn-contact.component";

describe('FnContactComponent', () => {
  let component: FnContactComponent;
  let fixture: ComponentFixture<FnContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FnContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

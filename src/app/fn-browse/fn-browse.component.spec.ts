import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {FnBrowseComponent} from "./fn-browse.component";

describe('FnBrowseComponent', () => {
  let component: FnBrowseComponent;
  let fixture: ComponentFixture<FnBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FnBrowseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

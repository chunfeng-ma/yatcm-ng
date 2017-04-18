import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {KeggpathwaysDetailComponent} from "./keggpathways-detail.component";

describe('KeggpathwaysDetailComponent', () => {
  let component: KeggpathwaysDetailComponent;
  let fixture: ComponentFixture<KeggpathwaysDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeggpathwaysDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeggpathwaysDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

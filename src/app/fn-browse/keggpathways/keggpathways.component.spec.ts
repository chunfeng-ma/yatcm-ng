/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {KeggpathwaysComponent} from "./keggpathways.component";

describe('KeggpathwaysComponent', () => {
  let component: KeggpathwaysComponent;
  let fixture: ComponentFixture<KeggpathwaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeggpathwaysComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeggpathwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var router_link_stub_1 = require("./testing/router-link-stub");
var router_1 = require("@angular/router");
var comp;
var fixture;
var de;
var el;
var RouterStub = (function () {
  function RouterStub() {
  }

  RouterStub.prototype.navigate = function (url) {
    return url;
  };
  return RouterStub;
}());
describe('AppComponent', function () {
  beforeEach(testing_1.async(function () {
    testing_1.TestBed.configureTestingModule({
      declarations: [app_component_1.AppComponent],
      providers: [
        {provide: router_1.Router, useClass: RouterStub},
        {provide: common_1.APP_BASE_HREF, useValue: '/'}
      ],
      schemas: [core_1.NO_ERRORS_SCHEMA]
    })
      .compileComponents().then(function () {
      fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
      comp = fixture.componentInstance;
    });
  }));
  it('should display information about .left-first', testing_1.inject([router_1.Router], function (router) {
    var spy = spyOn(router, 'navigate');
    fixture.detectChanges();
    de = fixture.debugElement.query(platform_browser_1.By.css('.left-first'));
    el = de.nativeElement;
    expect(el.textContent).toContain(comp.blogTitle);
    // navigate the correct url when click it
    el.click();
    var navarg = spy.calls.first();
    expect(navarg.args[0]).toEqual(['/dashboard']);
  }));
});
describe('Appcomponent2', function () {
  var linkDes;
  var links;
  beforeEach(testing_1.async(function () {
    testing_1.TestBed.configureTestingModule({
      declarations: [app_component_1.AppComponent, router_link_stub_1.RouterLinkStubDirective],
      providers: [
        {provide: common_1.APP_BASE_HREF, useValue: '/'},
        {provide: router_1.Router, useClass: RouterStub}
      ],
      schemas: [core_1.NO_ERRORS_SCHEMA]
    })
      .compileComponents().then(function () {
      fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
      comp = fixture.componentInstance;
    });
  }));
  beforeEach(function () {
    fixture.detectChanges();
    linkDes = fixture.debugElement
      .queryAll(platform_browser_1.By.directive(router_link_stub_1.RouterLinkStubDirective));
    links = linkDes
      .map(function (de) {
        return de.injector.get(router_link_stub_1.RouterLinkStubDirective);
      });
  });
  it('can instantiate it', function () {
    expect(comp).not.toBeNull();
  });
  it('can get RouterLink from template', function () {
    expect(links.length).toBe(2);
    expect(links[0].linkParams).toEqual('/logo');
    // linkDes[0].nativeElement.click();
    // expect(links[0].navigateTo).toEqual('/logo')
    var LinkD = linkDes[0];
    var Link = links[0];
    expect(Link.navigateTo).toBeNull();
    LinkD.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(Link.navigateTo).toBe('/logo');
  });
});

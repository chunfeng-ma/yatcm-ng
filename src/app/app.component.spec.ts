/* tslint:disable:no-unused-variable */

// import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
// import {By} from "@angular/platform-browser";
// import {APP_BASE_HREF} from "@angular/common";
// import {Router} from "@angular/router";
//
// let comp:AppComponent;
// let fixture:ComponentFixture<AppComponent>;
// let de:DebugElement;
// let el:HTMLElement;
//
// class RouterStub{
//   navigate(url:string){
//     return url
//   }
// }
// describe('AppComponent', () => {
//
//   beforeEach(async(()=>{
//     TestBed.configureTestingModule({
//       declarations:[AppComponent],
//       providers:[
//         {provide:Router,useClass:RouterStub},
//         {provide:APP_BASE_HREF,useValue:'/'}
//       ],
//       schemas:[NO_ERRORS_SCHEMA]
//     })
//       .compileComponents().then(()=>{
//       fixture=TestBed.createComponent(AppComponent);
//       comp=fixture.componentInstance;
//     })
//   }))
//
//   it('should display information about .left-first',inject([Router],(router:Router)=>{
//     const spy=spyOn(router,'navigate');
//
//     fixture.detectChanges()
//     de=fixture.debugElement.query(By.css('.left-first'));
//     el=de.nativeElement;
//
//     expect(el.textContent).toContain(comp.blogTitle);
//
//     // navigate the correct url when click it
//     el.click();
//     const navarg=spy.calls.first();
//     expect(navarg.args[0]).toEqual(['/dashboard'])
//   }));
// });
//
// describe('Appcomponent2',()=>{
//   let linkDes:DebugElement[];
//   let links:RouterLinkStubDirective[];
//   beforeEach(async(()=>{
//     TestBed.configureTestingModule({
//       declarations:[AppComponent,RouterLinkStubDirective],
//       providers:[
//         {provide:APP_BASE_HREF,useValue:'/'},
//         {provide:Router,useClass:RouterStub}
//       ],
//       schemas:[NO_ERRORS_SCHEMA]
//     })
//       .compileComponents().then(()=>{
//       fixture=TestBed.createComponent(AppComponent);
//       comp=fixture.componentInstance;
//     })
//   }))
//   beforeEach(()=>{
//     fixture.detectChanges();
//     linkDes=fixture.debugElement
//       .queryAll(By.directive(RouterLinkStubDirective));
//     links=linkDes
//       .map((de:DebugElement)=>de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective)
//   })
//   it('can instantiate it',()=>{
//     expect(comp).not.toBeNull();
//   })
//   it('can get RouterLink from template',()=>{
//     expect(links.length).toBe(2);
//     expect(links[0].linkParams).toEqual('/logo')
//     // linkDes[0].nativeElement.click();
//     // expect(links[0].navigateTo).toEqual('/logo')
//     const LinkD=linkDes[0];
//     const Link=links[0];
//     expect(Link.navigateTo).toBeNull();
//     LinkD.triggerEventHandler('click',null);
//     fixture.detectChanges();
//     expect(Link.navigateTo).toBe('/logo')
//   })
// })

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FnSearchComponent} from "./fn-search.component";
import {FnSearchRoutingModule} from "./fn-search-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FnSearchRoutingModule
  ],
  declarations: [FnSearchComponent],
  exports: [FnSearchComponent]
})
export class FnSearchModule {
}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FnHelpComponent} from "./fn-help.component";
import {FnHelpRoutingModule} from "./fn-help-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FnHelpRoutingModule
  ],
  declarations: [FnHelpComponent]
})
export class FnHelpModule {
}

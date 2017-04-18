/**
 * Created by zyf on 4/5/17.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FnHelpComponent} from "./fn-help.component";
export const routes: Routes = [
  {path: '', component: FnHelpComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FnHelpRoutingModule {

}

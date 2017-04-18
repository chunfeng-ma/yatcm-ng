/**
 * Created by zyf on 3/20/17.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FnSearchComponent} from "./fn-search.component";

export const routes: Routes = [
  {path: '', component: FnSearchComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FnSearchRoutingModule {

}

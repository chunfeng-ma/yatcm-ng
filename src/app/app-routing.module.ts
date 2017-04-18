/**
 * Created by zyf on 11/29/16.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FnDashboardComponent} from "./fn-dashboard/fn-dashboard.component";
import {FnContactComponent} from "./fn-contact/fn-contact.component";

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: FnDashboardComponent},
  {path: 'search', loadChildren: 'app/fn-search/fn-search.module#FnSearchModule'},
  {path: 'browse', loadChildren: 'app/fn-browse/fn-browse.module#FnBrowseModule'},
  {path: 'help', loadChildren: 'app/fn-help/fn-help.module#FnHelpModule'},
  {path: 'contact', component: FnContactComponent},
  {path: '**', component: FnDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

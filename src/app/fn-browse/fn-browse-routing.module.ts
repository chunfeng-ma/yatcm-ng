/**
 * Created by zyf on 3/20/17.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FnBrowseComponent} from "./fn-browse.component";
import {HerbsComponent} from "./herbs/herbs.component";
import {PrescriptionsComponent} from "./prescriptions/prescriptions.component";
import {KeggpathwaysComponent} from "./keggpathways/keggpathways.component";
import {HerbDetailComponent} from "./herbs/herb-detail/herb-detail.component";
import {HerbIngredientsComponent} from "./herbs/herb-ingredients/herb-ingredients.component";
import {PrescriptionsDetailComponent} from "./prescriptions/prescriptions-detail/prescriptions-detail.component";
import {CompoundDetailComponent} from "./compound-detail/compound-detail.component";

export const routes: Routes = [
  {
    path: '',
    component: FnBrowseComponent,
    children: [
      {path: 'herbs', component: HerbsComponent},
      {path: 'prescriptions', component: PrescriptionsComponent},
      {path: 'keggpathways', component: KeggpathwaysComponent},

      {path: 'herb-detail/:id', component: HerbDetailComponent},
      {path: 'herb-ingredients', component: HerbIngredientsComponent},

      {path: 'prescriptions-detail/:id', component: PrescriptionsDetailComponent},

      {path: 'compound-detail/:id', component: CompoundDetailComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FnBrowseRoutingModule {

}

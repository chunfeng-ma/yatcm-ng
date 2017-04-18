import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FnBrowseComponent} from "./fn-browse.component";
import {FnBrowseRoutingModule} from "./fn-browse-routing.module";
import {HerbsComponent} from "./herbs/herbs.component";
import {KeggpathwaysComponent} from "./keggpathways/keggpathways.component";
import {PrescriptionsComponent} from "./prescriptions/prescriptions.component";
import {HerbDetailComponent} from "./herbs/herb-detail/herb-detail.component";
import {HerbIngredientsComponent} from "./herbs/herb-ingredients/herb-ingredients.component";
import {KeggpathwaysDetailComponent} from "./keggpathways/keggpathways-detail/keggpathways-detail.component";
import {PrescriptionsDetailComponent} from "./prescriptions/prescriptions-detail/prescriptions-detail.component";
import {CompoundDetailComponent} from "./compound-detail/compound-detail.component";
import {FormsModule} from "@angular/forms";
import {PaginationModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FnBrowseRoutingModule,
    FormsModule,
    PaginationModule
  ],
  declarations: [
    FnBrowseComponent,
    HerbsComponent,
    KeggpathwaysComponent,
    PrescriptionsComponent,
    HerbDetailComponent,
    HerbIngredientsComponent,
    KeggpathwaysDetailComponent,
    PrescriptionsDetailComponent,
    CompoundDetailComponent
  ]
})
export class FnBrowseModule {
}

import "./rxjs-extension";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {WebService} from "./services/web.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import ApolloClient from "apollo-client/ApolloClient";
import {ApolloModule} from "apollo-angular";
import {createNetworkInterface} from "apollo-client";
import {FnDashboardComponent} from "./fn-dashboard/fn-dashboard.component";
import {FnSearchModule} from "./fn-search/fn-search.module";
import {FnBrowseModule} from "./fn-browse/fn-browse.module";
import {FnContactComponent} from "./fn-contact/fn-contact.component";
import {FnHelpModule} from "./fn-help/fn-help.module";
import {DataQueryService} from "./services/data-query.service";
import {Pagination} from "./services/pagination.service";
import {FnHelpRoutingModule} from "./fn-help/fn-help-routing.module";
import {TourNgBootstrapModule, TourService} from "ng2-tour";
import {HotkeyModule, HotkeysService} from "angular2-hotkeys";
import {CarouselModule, PaginationModule} from "ngx-bootstrap";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://172.16.41.178:8000/yatcm/graphql'
  })
});//by default, this client will send queries to `/graphql`(relative to the URL of you app)
export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    FnDashboardComponent,
    FnContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    FnSearchModule,
    FnBrowseModule,
    FnHelpModule,
    FnHelpRoutingModule,
    ApolloModule.forRoot(provideClient),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    TourNgBootstrapModule,
    HotkeyModule.forRoot()
  ],
  providers: [WebService, DataQueryService, Pagination, TourService, HotkeysService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

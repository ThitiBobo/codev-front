import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgApexchartsModule} from "ng-apexcharts";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MatDividerModule} from "@angular/material/divider";
import {ListComponent} from "./pages/list/list.component";
import {MetropolisDataCardComponent} from "./components/metropolis-data-card/metropolis-data-card.component";
import {MetropolisDataHistoryComponent} from "./components/metropolis-data-history/metropolis-data-history.component";
import {MapComponent} from "./components/map/map.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    ListComponent,
    MetropolisDataCardComponent,
    MetropolisDataHistoryComponent,
    MapComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    NgApexchartsModule,
    LeafletModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
    ListComponent
  ]
})
export class GeneralModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {MetropolisDataCardComponent} from "../metropolis-data-card/metropolis-data-card.component";
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from "@angular/material/expansion";
import {MetropolisDataHistoryComponent} from "../metropolis-data-history/metropolis-data-history.component";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    ListComponent,
    MetropolisDataCardComponent,
    MetropolisDataHistoryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    NgApexchartsModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }

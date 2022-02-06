import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {MetropolisDataCardComponent} from "../metropolis-data-card/metropolis-data-card.component";
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from "@angular/material/expansion";
import {AppModule} from "../../../app.module";
import {MetropolisDataHistoryComponent} from "../metropolis-data-history/metropolis-data-history.component";

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
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasComponent } from './datas.component';
import { DatasRoutingModule } from './datas-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DatasRoutingModule
  ],
  exports: [
    DatasComponent
  ],
  declarations: [
    DatasComponent
  ]
})
export class DatasModule { }

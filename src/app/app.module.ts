import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/pages/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {OverlayModule} from "@angular/cdk/overlay";
import { ThemeSwitchComponent } from './shared/components/theme-switch/theme-switch.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MapComponent} from "./modules/application/map/components/map/map.component";
import { MapHomeComponent } from './modules/application/map/map-home.component';
import {MetropolisService} from "./core/services/metropolis.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ThemeSwitchComponent,
    MapComponent,
    MapHomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './modules/general/pages/home/home.component';
import {NotFoundComponent} from './modules/general/pages/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./core/interceptors/jwt-interceptor.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DatePipe} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ThemeSwitchComponent } from './shared/components/theme-switch/theme-switch.component';
import { ProfilFabComponent } from './shared/components/profil-fab/profil-fab.component';
import {MatButtonModule} from "@angular/material/button";
import {GeneralModule} from "./modules/general/general.module";
import {HttpErrorInterceptor} from "./core/interceptors/http-error-interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SnackBarMessageComponent } from './shared/components/snack-bar-message/snack-bar-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ThemeSwitchComponent,
    ProfilFabComponent,
    SnackBarMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    GeneralModule,
    MatSnackBarModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    DatePipe],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

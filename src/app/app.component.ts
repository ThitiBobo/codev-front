import {Component} from '@angular/core';
import {HttpErrorInterceptor} from "./core/interceptors/http-error-interceptor";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codev-front';
  version = '1.0'
}


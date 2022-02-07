import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  text_registration: string = "Inscription"
  text_connection: string = "Connexion"

  background_disabled: boolean = false
  connection_button_disabled: boolean = false
  registration_button_disabled: boolean = false

  @Input() connected = false;
  @Input() username!: string;

  constructor(private router: Router,
              private authService: AuthService) {
    this.authService.user.subscribe((nextValue) => {
      this.connected = nextValue != null  // this will happen on every change
      if (nextValue != null) {
        this.username = nextValue.firstname + ' ' + nextValue.lastname
      }
    })
  }

  onAuthClick(event: String) {
    console.log(event)
    if (event == 'logout') {
      this.authService.logout()
      this.connected = false;
    }

    if (event == 'login') {
      this.router.navigate(['/auth/login']);
    }

    if (event == 'register') {
      this.router.navigate(['/auth/register']);
    }
  }
}

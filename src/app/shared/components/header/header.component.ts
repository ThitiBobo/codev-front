import { Component, OnInit } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;

  text_registration: string = "Inscription"
  text_connection: string = "Connexion"

  background_disabled: boolean = false
  connection_button_disabled: boolean = false
  registration_button_disabled: boolean = false
  connected: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}

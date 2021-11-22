import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

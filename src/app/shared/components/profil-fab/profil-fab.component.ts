import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

@Component({
  selector: 'app-profil-fab',
  templateUrl: './profil-fab.component.html',
  styleUrls: ['./profil-fab.component.scss']
})
export class ProfilFabComponent implements OnInit {

  faUser = faUser;
  @Input() username: string
  @Input() connected: boolean
  @Input() connection_button_disabled: boolean
  @Input() registration_button_disabled: boolean

  @Output() clickButton = new EventEmitter<String>()

  constructor() {
    this.username = 'Prénom Nom'
    this.connected = true
    this.connection_button_disabled = false;
    this.registration_button_disabled = false;
  }

  ngOnInit(): void {
  }

  onRegisterClick() {
    this.clickButton.emit('register')
  }

  onLoginClick() {
    this.clickButton.emit('login')
  }

  onProfileClick() {
    this.clickButton.emit('profile')
  }

  onAuthClick(event: String) {
    this.clickButton.emit(event)
  }
}

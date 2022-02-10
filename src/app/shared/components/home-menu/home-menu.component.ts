import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  @Input() connected = false;
  @Input() username!: string;

  @Output() clickButton = new EventEmitter<String>()


  constructor() { }

  ngOnInit(): void {
  }

  onAuthClick(event: string) {
    console.log("home-menu" + event)
    this.clickButton.emit(event)
  }
}

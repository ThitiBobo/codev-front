import {Component, Input, OnInit} from '@angular/core';
import {Data} from "../../../../core/models/data";

@Component({
  selector: 'app-metropolis-favourite-card',
  templateUrl: './metropolis-favourite-card.component.html',
  styleUrls: ['./metropolis-favourite-card.component.css']
})
export class MetropolisFavouriteCardComponent implements OnInit {
  @Input() data!: Data

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {

  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Data} from "../../../core/models/data";
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-metropolis-data-card',
  templateUrl: './metropolis-data-card.component.html',
  styleUrls: ['./metropolis-data-card.component.css']
})
export class MetropolisDataCardComponent implements OnInit {

  @Input() data!: Data
  @Input() history: any[] = []

  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
  }

  onExpand(event: void) {
    //this.history = this.dataservice.getHistory()
  }
}

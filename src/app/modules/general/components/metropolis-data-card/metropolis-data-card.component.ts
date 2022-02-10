import {Component, Input, OnInit} from '@angular/core';
import {Data} from "../../../../core/models/data";
import {Subject} from "rxjs";

@Component({
  selector: 'app-metropolis-data-card',
  templateUrl: './metropolis-data-card.component.html',
  styleUrls: ['./metropolis-data-card.component.scss']
})
export class MetropolisDataCardComponent implements OnInit {

  @Input() data!: Data
  @Input() history: any[] = []

  extendEvent: Subject<void> = new Subject<void>()
  constructor() { }

  ngOnInit(): void {
  }

  onExpand(event: void) {
    this.extendEvent.next()
  }
}

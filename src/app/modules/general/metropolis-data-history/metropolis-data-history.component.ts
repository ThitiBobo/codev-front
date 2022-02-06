import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-metropolis-data-history',
  templateUrl: './metropolis-data-history.component.html',
  styleUrls: ['./metropolis-data-history.component.css']
})
export class MetropolisDataHistoryComponent implements OnInit {

  @Input() history: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}

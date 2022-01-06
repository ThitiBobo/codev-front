import {Component, Input, OnInit} from '@angular/core';
import {Metropolis} from "../../../shared/models/metropolis.model";
import {MetropolisService} from "../../../core/services/metropolis.service";

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.scss']
})
export class MapHomeComponent implements OnInit {

  @Input() metropolises: Metropolis[] = []
  subscribe: any

  constructor(private metropolisService: MetropolisService) { }

  ngOnInit(): void {
    this.subscribe = this.metropolisService.list().subscribe(response => {
      this.metropolises = response;
      console.log(response)
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}

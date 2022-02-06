import {Component, Input, OnInit} from '@angular/core';
import {Data} from "../../../core/models/data";
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() recentData: Data[] = []
  @Input() favouriteData: Data[] = []
  @Input() oldData: Data[] = []
  subscribe: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscribe = this.dataService.list().subscribe(response => {
      this.recentData = response.recentData.map(item => new Data(item.code, item.metropolis, item.date_hour, item.consumption))
      this.favouriteData = response.preferences.map(item => new Data(item.code, item.metropolis, item.date_hour, item.consumption))
      this.oldData = response.otherData.map(item => new Data(item.code, item.metropolis, item.date_hour, item.consumption))
      console.log("response : ", response.recentData)
    })
  }

}

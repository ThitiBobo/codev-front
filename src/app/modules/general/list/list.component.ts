import {Component, Input, OnInit} from '@angular/core';
import {Data} from "../../../core/models/data";
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() datas: Data[] = []
  subscribe: any

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.dataService.list());

    this.subscribe = this.dataService.list().subscribe(response => {
      this.datas = response.recentData.map(item => new Data(item.code, item.metropolis, item.date_hour, item.consumption))
      console.log("response : ", response.recentData)
    })

    console.log(this.datas);
  }

}

import {Component, Input, OnInit} from "@angular/core";
import {Data} from "../../../core/models/data";
import {DataService} from "../../../core/services/data.service";
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {

  @Input() datas: any[] = []
  subscribe: any

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {

    //this.subscribe = this.dataService.list().subscribe(datas => this.datas);

    console.log(this.dataService.list());

    this.subscribe = this.dataService.list().subscribe(response => {
      this.datas = response.recentData.map(item => new Data(item.code, item.metropolis, item.date_hour, item.consumption))
      console.log("response : ", response.recentData)
    })

    console.log(this.datas);

  }

}

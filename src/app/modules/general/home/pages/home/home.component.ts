import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../core/services/data.service";
import {DataList} from "../../../../../core/models/data-list";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.list().subscribe(response => {
      console.log('ok')
      console.log(response)
      console.log(response instanceof DataList)
    })
  }

}

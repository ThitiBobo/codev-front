import {Component, Input, OnInit} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import * as L from 'leaflet';
import {MetropolisService} from "../../../core/services/metropolis.service";
import {Metropolis} from "../../../core/models/metropolis";
import {Data} from "../../../core/models/data";
import {DataService} from "../../../core/services/data.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() metropolis: Metropolis[] = []
  @Input() subscribe: any
  @Input() recentData: Data[] = []
  @Input() favouriteData: Data[] = []
  @Input() oldData: Data[] = []

  constructor(private metropolisservice : MetropolisService, private dataService: DataService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.

    const map = L.map('frugal-map', {
      zoom: 6,
      scrollWheelZoom: false,
      center: [46.9, 3.5],
    });

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(map);


    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    this.subscribe = this.dataService.list().subscribe(response => {
      this.recentData = response.recentData.map(item => new Data(item.code, item.metropolis, item.date_hour, item.consumption))
      this.favouriteData = response.preferences.map(item => new Data(item.code, item.metropolis, item.date_hour, item.consumption))
      this.oldData = response.otherData.map(item => new Data(item.code, item.metropolis, item.date_hour, item.consumption))
      let datas = this.recentData.concat(this.oldData).concat(this.favouriteData)
      console.log("response : ", response.recentData)
      this.subscribe = this.metropolisservice.list().subscribe(response => {
        this.metropolis = response
        for (let metropolis of this.metropolis) {
          for (let data of datas) {
            if (data.code == metropolis.code) {
              let date = this.datePipe.transform(data.date_hour,'dd/MM/yyyy HH:mm');
              let tag = "<b>Métropole :</b> " + data.metropolis + "<br/><b>Consommation :</b> " + data.consumption + "MWh <br/><b>Date de la donnée :</b> " + date
              L.marker([metropolis.latitude, metropolis.longitude], {icon: myIcon}).bindPopup(tag).addTo(map).openPopup();
            }
          }
        }
      })
    })
  }

}
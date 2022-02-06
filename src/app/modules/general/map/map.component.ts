import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.

    const map = L.map('frugal-map', {
      zoom: 13,
      scrollWheelZoom: false,
      center: [45.6311634, 4.8599573],
    });

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(map);


    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([45.77294193470039, 4.857442659043346], {icon: myIcon}).bindPopup('50521').addTo(map).openPopup();

    L.marker([45.77294193470039, 4.877442659043346], {icon: myIcon}).bindPopup('501').addTo(map).openPopup();

  }

}

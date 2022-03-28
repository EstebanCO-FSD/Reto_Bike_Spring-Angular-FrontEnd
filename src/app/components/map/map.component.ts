import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;

  constructor(private markerService: MapService) { }

  ngAfterViewInit(): void {
      this.initMap();
      this.markerService.makeMarkers(this.map)
  }

  private initMap(): void {

    this.map = L.map('map').setView([4.7180277, -74.13394], 15);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });

    tiles.addTo(this.map);

  }
}

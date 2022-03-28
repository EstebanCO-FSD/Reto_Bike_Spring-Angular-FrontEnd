import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BASE } from 'src/environments/environment';
import * as L from 'leaflet';

const API_BASE = URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  urlBase = `${API_BASE}/bicicletas`;

  constructor(
    private http: HttpClient
  ) { }

  makeMarkers(map: L.Map): void {
    this.http.get(this.urlBase).subscribe((res: any) => {

      for (const c of res){
        const lat = c.lat;
        const lon = c.lon;
        const marker = L.marker([lon, lat]).addTo(map); 
        marker.bindPopup(
                          `<center>
                            <p>
                              <strong>${c.marca}</strong>
                            </p>
                          </center>
                          <p>Esta es la ubicación de tu bicicleta</p>`
                        ).openPopup();
      }

    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { Statement } from '@angular/compiler';
import { LocationData } from '../shared/locationData.model';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentLocation: LocationData;
  hasDataBeenUpdated = false;
  freshestDataTime: number;
  userZip: string;
  locationDataSubject = new Subject<LocationData>();
  constructor(private http: HttpClient) { }
  private requestUrl = 'https://api.weather.gov/points/39.7456,-97.0892';
  private config = {
    headers: {
      'Content-Type': 'application/json'
    }

  };

  getWeather() {
    if (this.itIsTimeToGetNewData()) {
      this.http.get(this.requestUrl, this.config).subscribe(data => {
        this.extractInitialRequest(data);
      });
      return this.locationDataSubject.next(this.currentLocation);
    }
  }

  private extractInitialRequest(data: any) {
    this.currentLocation = new LocationData(
      data?.properties?.city, data?.properties?.state,
      data?.relativeLocation?.geometry?.coordinates[0],
      data?.relativeLocation?.geometry?.coordinates[1],
      this.userZip,
      data?.radarStation, data?.timeZone);
  }

  private itIsTimeToGetNewData() {
    if (!this.freshestDataTime && (Date.now() > this.freshestDataTime)) {
      return true;
    }
    return false;
  }
}

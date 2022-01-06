import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CONSTANTS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  hasDataBeenUpdated = false;
  freshestDataTime: number;
  userZip: string;

  constructor(private http: HttpClient) { }

  getWeather(zipcode?: string): Observable<any> {
    return of(this.http.get(`${CONSTANTS.urls.zipToGeo.url}${zipcode}`, this.generateHeader(CONSTANTS.urls.zipToGeo.headers)).subscribe((geographicResponse: any) => {
      const geographicInfo: GeographicInfo = geographicResponse;
      this.http.get(`${CONSTANTS.urls.weatherEndpoint.url}${geographicInfo.lat - CONSTANTS.errorCorrection},${geographicInfo.long}`, this.generateHeader(CONSTANTS.urls.weatherEndpoint.headers)).subscribe((weatherApiResponse: any) => {

      });
    }));
  }

  private generateHeader(headerDict: any): any {
    return {
      headers: new HttpHeaders(headerDict)
    }
  }
}

interface GeographicInfo {
  awater: number,
  awater_Sqmi: number,
  aland_Sqmi: number,
  geoid: number,
  aland: number,
  lat: number,
  long: number
}
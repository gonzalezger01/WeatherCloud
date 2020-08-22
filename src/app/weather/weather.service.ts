import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { Statement } from '@angular/compiler';
import { WeatherDataService } from './weather-data.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private weatherDataService: WeatherDataService) { }
  private requestUrl: string = 'https://api.weather.gov/points/39.7456,-97.0892'
  private config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  getWeather() {
    this.http.get(this.requestUrl).subscribe(data => {
        console.log(data);
      });
  }
}

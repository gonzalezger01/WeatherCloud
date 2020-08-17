import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private requestUrl: string = 'https://api.weather.gov/points/39.7456,-97.0892'
  private config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  getWeather() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    this.http.get(this.requestUrl).
      pipe(map(responseData => { }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      ).subscribe(weatherData => {
        console.log(weatherData);
      });
  }
}

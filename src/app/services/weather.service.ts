import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { CONSTANTS } from '../shared/constants';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  hasDataBeenUpdated = false;
  freshestDataTime: Time;
  forecast: Weather[] = [];
  weatherApi: WeatherApi = {
    forecast: '',
    hourlyForecast: ''
  };
  location: string;

  constructor(private http: HttpClient) { }

  getWeatherAPI(zipcode?: string): void {
    const zipToGeo = `${CONSTANTS.urls.zipToGeo.url}${zipcode}`;
    const zipToGeoHeader = this.generateHeader(CONSTANTS.urls.zipToGeo.headers);

    this.http.get(zipToGeo, zipToGeoHeader).subscribe((geographicResponse: any) => {
        this.getWeatherAPIData(geographicResponse);
      });
  }

  private getWeatherAPIData(geographicInfo: GeographicInfo): void {
    const weatherEndpointUrl = `${CONSTANTS.urls.weatherEndpoint.url}${geographicInfo.lat - CONSTANTS.errorCorrection},${geographicInfo.long}`;
    const weatherEndpointHeader = this.generateHeader(CONSTANTS.urls.weatherEndpoint.headers);

    this.http.get(weatherEndpointUrl, weatherEndpointHeader).subscribe((weatherApiResponse: any) => {
        const weatherProperties = weatherApiResponse.properties;
        this.weatherApi.forecast = weatherProperties.forecast;
        this.weatherApi.hourlyForecast = weatherProperties.forecastHourly;
        this.location = `${weatherProperties.relativeLocation.properties.city}, ${weatherProperties.relativeLocation.properties.state}`;

        this.http.get(this.weatherApi.forecast).subscribe((response: any) => {
          this.handleWeatherResponse(response.properties);
        });
      });
  }

  private generateHeader(headerDict: any): any {
    return {
      headers: new HttpHeaders(headerDict)
    };
  }

  private handleWeatherResponse(properties: any): void {
    this.freshestDataTime = properties.generatedAt;
    this.forecast = properties.periods;
  }

}

interface GeographicInfo {
  awater: number;
  awater_Sqmi: number;
  aland_Sqmi: number;
  geoid: number;
  aland: number;
  lat: number;
  long: number;
}

interface WeatherApi {
  forecast: string;
  hourlyForecast: string;
}

interface Weather {
  index: number;
  name: string;
  isDay: boolean;
  temperature: string;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

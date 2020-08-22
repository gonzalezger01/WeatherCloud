import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  weatherStation: string;
  city: string;
  timeZone: string;
  constructor() { }
}

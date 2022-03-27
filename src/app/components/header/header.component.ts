import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CONSTANTS } from '../../shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  zipCode = CONSTANTS.defaultLocations.winstonSalem;
  location = '';
  options: FormGroup;

  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(CONSTANTS.defaultLocations.winstonSalem);
  }

  getWeather(zipCode?: string): void {
    this.weatherService.getWeatherAPI(zipCode);
  }
}

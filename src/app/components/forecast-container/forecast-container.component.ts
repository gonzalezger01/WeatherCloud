import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { CONSTANTS } from 'src/app/shared/constants';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.css']
})
export class ForecastContainerComponent implements OnInit {
  zipCode = CONSTANTS.defaultLocations.winstonSalem;
  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(zipCode?: string): void {
    this.weatherService.getWeatherAPI(zipCode);
  }

}

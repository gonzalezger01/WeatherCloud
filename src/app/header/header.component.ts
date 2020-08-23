import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { LocationData } from '../shared/locationData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLocation: LocationData;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather() {
    this.weatherService.locationDataSubject.subscribe((locationData: LocationData) => {
      this.currentLocation = locationData;
    });
  }
}

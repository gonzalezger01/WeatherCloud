import { Component } from '@angular/core';
import { WeatherService} from '../app/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherCloud';
  constructor(private weather: WeatherService) {}

  getWeather() {
    this.weather.getWeather();
  }
}

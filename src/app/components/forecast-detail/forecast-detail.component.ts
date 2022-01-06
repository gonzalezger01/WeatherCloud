import { formattedError } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.css']
})
export class ForecastDetailComponent implements OnInit {
  @Input() forecast;
  formattedTime: any;
  constructor() { }

  ngOnInit(): void {
    const date = new Date(this.forecast.startTime);
    this.formattedTime = date.toLocaleDateString();
  }
}

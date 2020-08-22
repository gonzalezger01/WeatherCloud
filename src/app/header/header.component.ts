import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cityState: string = "Mooselookmeguntic, NY";
  lat: number = 15.5;
  long: number = 15.5;
  userZip = 23232;
  weatherStation = "RAH";
  constructor() { }

  ngOnInit(): void {
  }

}

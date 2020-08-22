import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather/weather.service';
import { WeatherDataService } from './weather/weather-data.service';
import { HeaderComponent } from './header/header.component';
import { BREAKPOINTS, DEFAULT_BREAKPOINTS, FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './shared/custom-breakpoints'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule.withConfig({disableDefaultBps: true})
  ],
  providers: [
    WeatherService,
    WeatherDataService,
    CustomBreakPointsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

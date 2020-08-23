import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather/weather.service';
import { HeaderComponent } from './header/header.component';
import { BREAKPOINTS, DEFAULT_BREAKPOINTS, FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './shared/custom-breakpoints';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: true })
  ],
  providers: [
    WeatherService,
    CustomBreakPointsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

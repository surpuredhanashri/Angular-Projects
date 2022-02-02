import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnakeComponent } from './snake/snake.component';
import { CarRacingComponent } from './car-racing/car-racing.component';

@NgModule({
  declarations: [
    AppComponent,
    SnakeComponent,
    CarRacingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

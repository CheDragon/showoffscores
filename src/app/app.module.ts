import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { PlayersService } from './services/players.service';
import { DisplayComponent } from './components/display/display.component';
import { ControlComponent } from './components/control/control.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ControlComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserAnimationsModule,
    BrowserModule,
    MatGridListModule,
    NoopAnimationsModule
  ],
  providers: [
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

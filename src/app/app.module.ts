import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { APP_CONFIG, AppConfig } from './configs/app.config';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

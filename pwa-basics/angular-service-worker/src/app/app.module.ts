import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MyAppComponent
  ],
  bootstrap: [
    MyAppComponent
  ]
})
export class AppModule {}
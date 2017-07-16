import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { DepartmentsService } from './departments.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentsListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [DepartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

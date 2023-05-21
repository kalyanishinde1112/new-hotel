import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';
import { EditBookingComponent } from './components/edit-booking/edit-booking.component';
import { FlightsComponent } from './components/flights/flights.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { Dialogue1Component } from './components/dialogue1/dialogue1.component';
import { CarsComponent } from './cars/cars.component';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './list/list.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllBookingsComponent,
    EditBookingComponent,
    FlightsComponent,
    DialogueComponent,
    Dialogue1Component,
    CarsComponent,
    ListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    CoreModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

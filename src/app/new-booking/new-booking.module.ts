import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingComponent } from './new-booking.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ChooseHotelComponent } from './choose-hotel/choose-hotel.component';
import { ChooseRoomComponent } from './choose-room/choose-room.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { GuestInformationComponent } from './guest-information/guest-information.component';
import { FinishBookingComponent } from './finish-booking/finish-booking.component';
import { FlexLayoutModule } from '@angular/flex-layout';
 


@NgModule({
  declarations: [
    NewBookingComponent,
    PaymentDetailsComponent,
    ChooseHotelComponent,
    ChooseRoomComponent,
  SearchHotelComponent,
    PersonalInformationComponent,
    GuestInformationComponent,
    FinishBookingComponent,
  
  
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule
  
  ],
  exports:[NewBookingComponent]
})
export class NewBookingModule { }

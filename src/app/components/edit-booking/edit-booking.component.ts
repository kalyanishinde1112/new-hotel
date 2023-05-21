import { Component, OnInit,Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HotelService } from 'src/app/services/hotel.service';
@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit{
  editBooking!:FormGroup;
  constructor(   public dialogRef: MatDialogRef<EditBookingComponent>,private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,private hotel:HotelService){
    console.log("data",data);
    
  }
  ngOnInit(): void {
     this.editForm();
     this.setBookingDetails();
  }
  editForm(){
    this.editBooking = this.fb.group({
      checkInDate: [''],
      checkOutDate: [''],
      mobileNo: [''],
      
    });
  }
  close(){
    this.dialogRef.close();
  }
  setBookingDetails(){
    this.editBooking.get("checkInDate")?.setValue(this.data.searchHotel.checkInDate);
    this.editBooking.get("checkOutDate")?.setValue(this.data.searchHotel.checkOutDate);
    this.editBooking.get("mobileNo")?.setValue(this.data.personalInfo.mobileNo);
  }
  update(){
    this.data.searchHotel.checkInDate=this.editBooking.value.checkInDate;
    this.data.searchHotel.checkOutDate=this.editBooking.value.checkOutDate;
    this.data.personalInfo.mobileNo=this.editBooking.value.mobileNo;
    // let endPoint:string="hotel-booking?id="+this.data.id;
    let endPoint="hotel-booking/"+this.data.id;
    this.hotel.putDatatoserver(endPoint,this.data).subscribe((el:any)=>{
      if(el){
        // pass data on closing of dialogue to the parent 
        this.dialogRef.close({booking:this.data});
        console.log(el);
        
      }
    })
  }
}

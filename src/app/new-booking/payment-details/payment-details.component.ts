import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent {
  paymentnfo!:FormGroup;
  parentForm!:FormGroup;
  payStatus=['paid','unpaid']
  @Input()stepper!:MatStepper;
  constructor(private formContaner:FormGroupDirective, private fb:FormBuilder,private hotel:HotelService) { }

  ngOnInit(): void {
    this.createForm();
    this.parentForm=this.formContaner.form;
    if(this.parentForm){
     this.parentForm.addControl("paymentnfo",this.paymentnfo)
    }
     console.log(this.stepper);
     
  }
createForm(){
  this.paymentnfo=this.fb.group({
    "nameOntheCard":[''],
    "debitCradNo":[''], 
    "exprationYear":[''], 
    "expiryMonth":[''], 
    "securityCode":[''],
    "dob":[''],
    "paymentStatus":['']
   
  })
  
}
saveData(){
  console.log(this.paymentnfo.value);
}
placeOrder(){
  const formData=this.parentForm.value;
  this.hotel.postDatatoserver("hotel-booking",formData).subscribe((el:any)=>{
if(el){
  this.stepper.next();
}
  },
  ()=>{

  });
  
}
}



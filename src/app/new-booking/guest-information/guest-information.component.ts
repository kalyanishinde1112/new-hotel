import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-guest-information',
  templateUrl: './guest-information.component.html',
  styleUrls: ['./guest-information.component.scss']
})
export class GuestInformationComponent implements OnInit{
  guestDetails!:FormGroup;
  parentForm!:FormGroup;
   constructor(private fb:FormBuilder, private formContianer:FormGroupDirective) { }
 
   ngOnInit() {
    this.guestDetails=this.fb.group({
      "totalGuest":[''],
      "guestArr":this.fb.array([])
    })
    this.addGuest();
    this.parentForm=this.formContianer.form;
    if(this.parentForm){
     this.parentForm.addControl('guestDetails',this.guestDetails)
    }
      
   }
   guest(){
    return this.fb.group({
      "custName":"",
      "age":"",
      "gender":""
    })
   }
 
   get guestArr(){
return this.guestDetails.get("guestArr") as FormArray
   }
   addGuest(){
    this.guestArr.push(this.guest());
   }
   removeGuest(i:number){
    this.guestArr.removeAt(i)
     }
     savedata(){
      console.log(this.guestDetails.value);
     }
  }
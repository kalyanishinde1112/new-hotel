import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit{
  personalnfo!:FormGroup;
  parentForm!:FormGroup;
 countryLst=[{"value":"","viewvalue":"Select"},
   {"value":"Us","viewvalue":"United State"},
 {"value":"Ind","viewvalue":"India"},
 {"value":"Eng","viewvalue":"England"},
 
  
 ]
   constructor(private fb:FormBuilder,private hotel:HotelService, private formContainer:FormGroupDirective) { }
 
   ngOnInit(){
     this.cretePersonalForm();
     this.parentForm= this.formContainer.form;
     if (this.parentForm) {
       this.parentForm.addControl('personalInfo', this.personalnfo);
     }
  
     this.saveInfo();
   }
 cretePersonalForm(){
   this.personalnfo=this.fb.group({
     "name":[''],
     "country":[''], 
     "dob":[''], 
     "mobileNo":[''], 
     "gender":[''],
    
   })
 }
 saveInfo(){
  console.log(this.personalnfo.value);
  console.log(this.parentForm.value);
  
  
 }
 }
 
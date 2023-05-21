import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs';
import { city } from 'src/app/new-booking/city.model';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // searchHotel!: FormGroup;
  selectedValue:any;
  isLoadingCIties:boolean=false;
  cities:city[]=[];
  formGroup:FormGroup;
  private _formBuilder: any;
  constructor(
    
    private hotel: HotelService
  ) {
    this.formGroup=new FormGroup({
      searchHotel: new FormGroup({
        city:new FormControl(null,[Validators.required]),
        checkInDate:new FormControl(null,[Validators.required]),
        checkOutDate: new FormControl(null,[Validators.required]),
        adult:new FormControl(null,[Validators.required]),
        children:new FormControl(null,[Validators.required]),
      })
    })
  }

  ngOnInit() {
this.getAllCities();
  }
// search code

getAllCities(){
this.getFormControl("searchHotel.city").valueChanges.pipe(
  //debounce time is that wait for 500 milisecond after typing textbox
  debounceTime(500),
  // tap:do something before making request
  tap(()=>{
    this.cities=[];
    this.isLoadingCIties=true;
  }),
  //switchMap to make http request
  switchMap(value=>this.hotel.getCIties(value))
).subscribe((response:city[])=>{
  this.cities=response;
  this.isLoadingCIties=false;
},
(error)=>{
  console.log(error);
  this.isLoadingCIties=false;
  
})
}
getFormControl(controName:string):FormControl
{
   return this.formGroup.get(controName) as FormControl
}

}

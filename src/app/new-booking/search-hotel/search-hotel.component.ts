import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { debounceTime, map, Observable, startWith, tap } from 'rxjs';
import { HotelService } from 'src/app/services/hotel.service';
import { city } from '../city.model';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {
  searchHotel!: FormGroup;
  parentForm!: FormGroup;
  options: string[] = ['Pune', 'Mumbai', 'Goa'];
 hotelsData:any[]=[];
  filteredOptions!: Observable<string[]>;
  selectedValue:any;
  cities:city[]=[];
  formGroup!:FormGroup;
  private _formBuilder: any;
  constructor(
    private fb: FormBuilder,
    private formContainer: FormGroupDirective,
    private hotel: HotelService
  ) {}

  ngOnInit() {
    this.creteForm();
    this.parentForm = this.formContainer.form;
    if (this.parentForm) {
      this.parentForm.addControl('searchHotel', this.searchHotel);
      this.getSelctedCity();
    }

    this.filteredOptions = this.searchHotel.controls['city'].valueChanges.pipe(
      debounceTime(500),
      tap((el) => console.log('response', el)),
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  getCitiesData(value: string) {
    const endPoint = 'cityName?_like=' + value;
    this.hotel.getDataFormServer(endPoint).subscribe((response: any) => {
      this.filteredOptions = response;
      console.log(this.filteredOptions);
      
    });
  }
  creteForm() {
     
    this.searchHotel = this.fb.group({
      city: [''],
      checkInDate: [''],
      checkOutDate: [''],
      adult: ['1'],
      children: ['1'],
    });
  }
  saveHotel() {
    console.log(this.searchHotel.value);
    console.log(this.parentForm.value);
  }
  adultChange(type: string) {
    if (type == 'Increment') {
      this.searchHotel.controls['adult'].setValue(
        this.searchHotel.controls['adult'].value + 1
      );
    } else
      this.searchHotel.controls['adult'].setValue(
        this.searchHotel.controls['adult'].value - 1
      );
  }
  childrenChange(type: string) {
    if (type == 'Increment') {
      this.searchHotel.controls['children'].setValue(
        this.searchHotel.controls['children'].value + 1
      );
    } else
      this.searchHotel.controls['children'].setValue(
        this.searchHotel.controls['children'].value - 1
      );

     
  }
  getSelctedCity(){
        this.hotel.getDataFormServer("hotels").subscribe((el:any)=>{
          this.hotelsData=el;
          console.log("hotels Data",this.hotelsData);
          
        })
  }
// search code
 

}

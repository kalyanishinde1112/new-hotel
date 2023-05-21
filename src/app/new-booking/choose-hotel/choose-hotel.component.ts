import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-choose-hotel',
  templateUrl: './choose-hotel.component.html',
  styleUrls: ['./choose-hotel.component.scss']
})
export class ChooseHotelComponent {
  hotelData:any[]=[];
  constructor(private hotel:HotelService) { }

  ngOnInit(): void {
    this.getHotelData();
  }
getHotelData(){
  this.hotel.getDataFormServer("hotels").subscribe((el:any)=>{
    this.hotelData=el;
console.log("hotl Data",this.hotelData);

  })
}
}



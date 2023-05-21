import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from 'src/app/dialogue/dialogue.component';
import { HotelService } from 'src/app/services/hotel.service';
import { Dialogue1Component } from '../dialogue1/dialogue1.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  constructor(private hotel:HotelService,public dialog: MatDialog){

  }
  color:string='red';
  size:number=100;
  hotelData:any;
  count:number=0;
  cityData={

  }
  ngOnInit(): void {
    this.addTableData();
    
  }
  changeColor() {
    // generate a random color
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.count++;
    console.log(this.count);
    
  }

  removeCircle() {
    // remove the circle from the DOM
    const circleElement = document.querySelector('app-circle');
    // circleElement.parentNode.removeChild(circleElement);
  }
  addTableData(){
    this.hotel.getDataFormServer("cities").subscribe((el:any)=>{
      this.hotelData=el;
      console.log(this.hotelData);
      

    })
  }
  openDialog() {
    this.dialog.open(Dialogue1Component,{
      width:'40%'
    });
  }
  editProduct(city:any){
    this.dialog.open(Dialogue1Component,{
      width:'40%',
      data:city
    })
  
  }
  deleteCity(city:any){
    this.hotel.deleteDatae(city).subscribe(()=>{
      this.addTableData();
    })
  }
}

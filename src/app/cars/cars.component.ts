import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelService } from '../services/hotel.service';
import { Dialogue1Component } from '../components/dialogue1/dialogue1.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit{
  hotelData:any;
  displayedColumns: string[] = ['cityName','state','pincode','action'];
  dataSource!:MatTableDataSource<any>;

  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private hotel:HotelService,public dialog: MatDialog){



}  
ngOnInit(): void {
  this.addTableData();
  }
  addTableData(){
    this.hotel.getDataFormServer("cities").subscribe((el:any)=>{
      this.hotelData=el;
      this.dataSource = new MatTableDataSource(el);
      console.log(this.hotelData);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort
 
    })
  }
  openDialog() {
    this.dialog.open(Dialogue1Component,{
      width:'40%'
    });
  }
  editProduct(element:any){
    this.dialog.open(Dialogue1Component,{
      width:'40%',
      data:element
    })
  
  }
  deleteCity(city:any){
    this.hotel.deleteDatae(city).subscribe(()=>{
      this.addTableData();
    })
  }
  // filter code
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

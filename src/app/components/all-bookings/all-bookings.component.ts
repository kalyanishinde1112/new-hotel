import { Component ,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HotelService } from 'src/app/services/hotel.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { EditBookingComponent } from '../edit-booking/edit-booking.component';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.scss']
})
export class AllBookingsComponent implements OnInit{
  hotelArr:any;
  dataSource!:MatTableDataSource<any>;
  constructor(private hotel:HotelService,public dialog: MatDialog){}
  ngOnInit(): void {
 this.hotel.getDataFormServer('hotel-booking').subscribe((el:any)=>{
  this.hotelArr=el;
  this.dataSource = new MatTableDataSource(el);

 })
  }
  displayedColumns: string[] = ['select','name', 'checkInDate', 'checkOutDate', 'mobileNo','paymentStatus'];
 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialogue(booking:any){
    let dialogConfig=new MatDialogConfig;
    dialogConfig.width="400px";
    dialogConfig.data=booking;
const dialogRef= this.dialog.open(EditBookingComponent,dialogConfig);
dialogRef.afterClosed().subscribe(result=>{
  console.log("data recived from dialogue component",result);
  
})
  }
}

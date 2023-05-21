import { Component,OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  fileName:String='';
  onFileSeclected(event:any){
const file:File =event.target.files[0];
this.fileName=file.name;
console.log(this.fileName);
this.uploadFile(file);
this.fileUpload();
  }
  ngOnInit(): void {
   
  }
  constructor(private hotel:HotelService){}
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
  }
  fileUpload(){
    this.hotel.postDatatoserver("fileData",this.fileName).subscribe({
      next:(el:any)=>{
        alert("file uploaded successfully");

      },
      error:()=>{
        alert('error occured while uploading')
      }
    },)

  }
}

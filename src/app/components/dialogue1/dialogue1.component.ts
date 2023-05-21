import { Component,Inject,OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialogue1',
  templateUrl: './dialogue1.component.html',
  styleUrls: ['./dialogue1.component.scss']
})
export class Dialogue1Component implements OnInit {
  infoForm!:FormGroup;
  cityData:any;
  actionBtn:string="save";

  ngOnInit(): void {
 this.createForm();
 console.log("data from ",this.editData);
 if(this.editData){
  this.actionBtn="update"
  this.infoForm.controls["cityName"].setValue(this.editData.cityName);
  this.infoForm.controls["state"].setValue(this.editData.state);

  this.infoForm.controls["pincode"].setValue(this.editData.pincode);

 }
  }
constructor(private fb:FormBuilder,private hotel:HotelService,@Inject(MAT_DIALOG_DATA) public editData:any,private matRef:MatDialogRef<Dialogue1Component>){

}
createForm(){
this.infoForm=this.fb.group({
  "cityName":[''],
  "state":[''], 
  "pincode":[]
  
})


}

addForm(){

if(!this.editData){
  if(this.infoForm.valid){
    this.hotel.postDatatoserver("cities",this.infoForm.value).subscribe({
      next:(res:any)=>{
        alert('product added successfully');
      this.matRef.close('save');
      this.infoForm.reset();

      },
    error:()=>{
      alert("error while adding the product")
    }
    })   
  }
}
else{
  this.updateData();
}
}
updateData(){
  this.hotel.putData(this.infoForm.value,this.editData.id).subscribe({
    next:(res)=>{
      alert("Information Updated");
      this.infoForm.reset();
      this.matRef.close();
      
    },
    error:()=>{
      alert("error occured while Updation")
    }
  })
}
}

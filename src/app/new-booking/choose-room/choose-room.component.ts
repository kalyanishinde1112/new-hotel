import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControlDirective, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-choose-room',
  templateUrl: './choose-room.component.html',
  styleUrls: ['./choose-room.component.scss']
})
export class ChooseRoomComponent implements OnInit {
  // roomChoose!:FormGroup;
  // parentForm!:FormGroup;
  constructor( ){}
  ngOnInit(){
    // this.createDetails();
    // this.parentForm=this.formContaner.form;
    // if(this.parentForm){
    //  this.parentForm.addControl("roomChoose",this.roomChoose)
    // }
  }

// createDetails(){
//  this.roomChoose=this.fb.group({
//   "roomType":['delux'],
//   "roomdescription":[]
//  })
// }
// saveData(){
//   this.roomChoose.value;
// }
}

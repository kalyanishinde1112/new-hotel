import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signin } from '../access.model';
import { HotelService } from 'src/app/services/hotel.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  // Set variables
  isLoading = false;
  hide = true;
  signinForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private datasvc:HotelService, private tokenSvc:TokenService,private router:Router){}
  ngOnInit(): void {
    this.createForm();
  
  }
    
// Form builder
createForm(){
  this.signinForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });
  
}

 // Form getter
 get signinControls() {
  return this.signinForm.controls;
}
onSubmit(){
  // if(this.signinForm.valid){
    let url="userDetails?"+"email="+this.signinForm.value.email+"&password="+this.signinForm.value.password
    this.datasvc.getDataFormServer(url).subscribe((resp:any)=>{
      if(resp && resp.length>0){
        const token='adjkjdfkdfh';
        this.tokenSvc.setToken(token);
        this.router.navigate(['/new-booking'])
      }
    })
    this.isLoading=true;
    console.log(this.signinForm.value);
    
  // }

}
logout(){
  this.tokenSvc.removeToken('token')
  localStorage.clear();
  this.router.navigate(['/sign-in'])
  }
}




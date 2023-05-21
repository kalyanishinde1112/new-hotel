import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'',redirectTo:'sign-in',pathMatch:'full'},
  {path:'sign-in',component:SignInComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'reset-password/:id',component:ResetPasswordComponent},
  { path: '', component: AccessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }

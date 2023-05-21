import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AccessComponent,
    SignInComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class AccessModule { }

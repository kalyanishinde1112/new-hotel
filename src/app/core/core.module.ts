import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule { }

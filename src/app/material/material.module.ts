import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {matMenuAnimations, MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import {matDialogAnimations, MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const material=[
MatButtonModule,
MatCardModule,
MatDatepickerModule,
MatDividerModule,
MatFormFieldModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatPaginatorModule,
MatRadioModule,
MatSelectModule,
MatSliderModule,
MatStepperModule,
MatTableModule,
MatToolbarModule,
MatSidenavModule,
MatNativeDateModule,
MatDialogModule,
MatProgressBarModule,
MatAutocompleteModule

]


@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }

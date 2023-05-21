import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';
import { AuthGuard } from './guards/auth.guard';
import { FlightsComponent } from './components/flights/flights.component';
import { CarsComponent } from './cars/cars.component';
import { ListComponent } from './list/list.component';
 
 
 
const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'new-booking', loadChildren: () => import('./new-booking/new-booking.module').then(m => m.NewBookingModule)
 },
 {path:'all-booking',component:AllBookingsComponent},
 {path:'flights',component:FlightsComponent},
 {path:'cars',component:CarsComponent},
 {path:'list',component:ListComponent},



//  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) }
];
 
 

//use hash it place # before every url and even after copying url it will navigate to corect url
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

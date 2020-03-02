import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [ 
  {path: 'placeappointment',component:PlaceappointmentComponent},
  {path: 'viewappointment',component:ViewappointmentComponent},
  {path : 'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

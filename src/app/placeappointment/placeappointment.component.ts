import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-placeappointment',
  templateUrl: './placeappointment.component.html',
  styleUrls: ['./placeappointment.component.css']
})
export class PlaceappointmentComponent implements OnInit {

  appointment : Appointment = new Appointment();
  appointments : Appointment[];
  trainername : boolean = true;
  other : boolean = true;
  isOtherPackage : boolean = true;
  packageother : number ;
  trainer : String;
  constructor(private appointmentservice : AppointmentService,private router: Router) { }
  ngOnInit(): void {
  }

  addappointment(){
    this.appointmentservice.placeAppointment(this.appointment).subscribe(appointments=> this.appointment = appointments);
    this.router.navigateByUrl('viewappointment');
  }
   onSubmit(){
     this.addappointment();
   }

  toggle(value:String){
    console.log(value);
    if(value == 'trainername' || value == 'other')
    {     
      if (value =='trainername') {
        this.trainername = !this.trainername;
        this.other = true;
        this.appointment.trainerpreference = this.trainer;
      }else {
        this.other = !this.other;
        this.trainername = true;
        this.appointment.trainerpreference = this.trainer;
      }
    }else{
      this.trainername = true;
      this.other = true;
    } 
  }

  package(ispackage : String){
    if(ispackage == 'other'){
      this.isOtherPackage = !this.isOtherPackage;
      this.appointment.package = this.packageother;
    }
    else{
      this.isOtherPackage = true;
    }
  }
}

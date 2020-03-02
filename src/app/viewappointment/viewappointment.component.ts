import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {
  //appointment : Appointment = new Appointment();
  appointments: Appointment[];
  constructor(private appointmentservice: AppointmentService) { }
  ngOnInit(): void {
    this.appointmentservice.getAppointments().subscribe(appointments => this.appointments = appointments);
  }
}

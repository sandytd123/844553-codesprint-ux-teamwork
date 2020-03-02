import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient : HttpClient) { }
  placeAppointment(appointment:Appointment):Observable<any>{
    return this.httpClient.post(`http://localhost:3000/appointment`,appointment);
    }
  getAppointments():Observable<any>{
    return this.httpClient.get('http://localhost:3000/appointment');
  }
}

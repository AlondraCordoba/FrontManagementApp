import { Injectable } from '@angular/core';
import { GeneralData } from '../../config/generalData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoordinatorModel } from '../../models/coordinator.model';
import { UserModel } from 'src/app/models/user.model';
import { CoordinatorServiceService } from '../coordinatorService/coordinator-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url: String = GeneralData.url; 
  token?: String = "";

  constructor(private http: HttpClient, private coordService: CoordinatorServiceService) { 
    this.token = this.coordService.getToken();
  }

  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.url}/users`);
  }

  searchUser(id: number): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.url}/users/${id}`);
  }
 
  postUser(userModel: UserModel): Observable<any>{
    return this.http.post<any>(`${this.url}/users`, {
      phone: userModel.phone,
      full_name: userModel.full_name,
      english_level: userModel.english_level,
      email: userModel.email,
      venue: userModel.venue,
      origin_type: userModel.origin_type,
      type_mind: userModel.type_mind,
      date_entry_mind: userModel.date_entry_mind,
      days_mind: userModel.days_mind,
      city: userModel.city,
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  modifyUser(userModel: UserModel): Observable<any>{
    return this.http.put<any>(`${this.url}/users/${userModel.id}`, {
      phone: userModel.phone,
      full_name: userModel.full_name,
      english_level: userModel.english_level,
      email: userModel.email,
      venue: userModel.venue,
      origin_type: userModel.origin_type,
      type_mind: userModel.type_mind,
      date_entry_mind: userModel.date_entry_mind,
      days_mind: userModel.days_mind,
      date_user:userModel.date_user,
      city: userModel.city
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  deleteUser(userModel: UserModel): Observable<any>{
    return this.http.delete<any>(`${this.url}/users/${userModel.id}`, 
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

}
 
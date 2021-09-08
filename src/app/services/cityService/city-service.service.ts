import { Injectable } from '@angular/core';
import { GeneralData } from '../../config/generalData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoordinatorServiceService } from '../coordinatorService/coordinator-service.service';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  url: String = GeneralData.url; 
  token?: String = "";

  constructor(private http: HttpClient, private coordService: CoordinatorServiceService) { 
    this.token = this.coordService.getToken();
  }

}

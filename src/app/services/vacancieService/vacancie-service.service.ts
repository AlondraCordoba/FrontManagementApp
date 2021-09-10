import { Injectable } from '@angular/core';
import { GeneralData } from '../../config/generalData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoordinatorServiceService } from '../coordinatorService/coordinator-service.service';
import { VacancieModel } from '../../models/vacancie.model';

@Injectable({
  providedIn: 'root'
})
export class VacancieServiceService {
  url: String = GeneralData.url; 
  token?: String = "";
 
  constructor(private http: HttpClient, private coordService: CoordinatorServiceService) { 
    this.token = this.coordService.getToken();
  }

  getVacancies(): Observable<VacancieModel[]>{
    return this.http.get<VacancieModel[]>(`${this.url}/vacancies`);
  }

  getVacanciesCount(): Observable<VacancieModel[]>{
    return this.http.get<VacancieModel[]>(`${this.url}/vacancies/count`);
  }

  searchVacancie(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/vacancies/${id}`);
  }
 
  postVacancie(VacancieModel: VacancieModel): Observable<any>{
    return this.http.post<any>(`${this.url}/vacancies`, {
      technology: VacancieModel.technology,
      seniority: VacancieModel.seniority,
      trial_Account: VacancieModel.trial_Account,
      description: VacancieModel.description
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  editVacancie(VacancieModel: VacancieModel): Observable<any>{
    return this.http.put<any>(`${this.url}/vacancies/${VacancieModel.id}`, {
      technology: VacancieModel.technology,
      seniority: VacancieModel.seniority,
      trial_Account: VacancieModel.trial_Account,
      description: VacancieModel.description,
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  deleteVacancie(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/vacancies/${id}`, 
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

}
 
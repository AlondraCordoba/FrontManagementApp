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
 
  postVacancie(vacancieModel: VacancieModel): Observable<any>{
    return this.http.post<any>(`${this.url}/vacancies`, {
      technology: vacancieModel.technology,
      seniority: vacancieModel.seniority,
      trial_Account: vacancieModel.trial_Account,
      description: vacancieModel.description
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  editVacancie(vacancieModel: VacancieModel): Observable<any>{
    return this.http.put<any>(`${this.url}/vacancies/${vacancieModel.id}`, {
      id: vacancieModel.id,
      technology: vacancieModel.technology,
      seniority: vacancieModel.seniority,
      trial_Account: vacancieModel.trial_Account,
      description: vacancieModel.description,
      date_vacancy: vacancieModel.date_vacancy
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
 
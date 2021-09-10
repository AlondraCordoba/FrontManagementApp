import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/generalData';
import { CoordinatorServiceService } from '../coordinatorService/coordinator-service.service';
import { TestModel } from '../../models/tests.model';
import { FilesModel } from '../../models/files.model';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  url: String = GeneralData.url; 
  token?: String = "";
 
  constructor(private http: HttpClient, private coordService: CoordinatorServiceService) { 
    this.token = this.coordService.getToken();
  }

  getTests(): Observable<TestModel[]>{
    return this.http.get<TestModel[]>(`${this.url}/tests`);
  }

  searchTest(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/tests/${id}`);
  }
 
  postTest(testModel: TestModel): Observable<any>{
    return this.http.post<any>(`${this.url}/tests`, {
      id: testModel.id,
      technology: testModel.technology,
      date: testModel.date,
      score: testModel.score,
      user_id: testModel.user_id
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  editTest(testModel: TestModel): Observable<any>{
    return this.http.put<any>(`${this.url}/tests/${testModel.id}`, {
      id: testModel.id,
      technology: testModel.technology,
      date: testModel.date,
      score: testModel.score,
      user_id: testModel.user_id
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  deletTest(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/tests/${id}`, 
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

}

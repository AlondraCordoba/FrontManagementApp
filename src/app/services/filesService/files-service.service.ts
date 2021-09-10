import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/generalData';
import { CoordinatorServiceService } from '../coordinatorService/coordinator-service.service';
import { FilesModel } from 'src/app/models/files.model';
import { FilesNameModel } from '../../models/filesname';

@Injectable({
  providedIn: 'root'
})
export class FilesServiceService {
  url: String = GeneralData.url; 
  token?: String = "";
 
  constructor(private http: HttpClient, private coordService: CoordinatorServiceService) { 
    this.token = this.coordService.getToken();
  }

  getFiles(): Observable<FilesModel[]>{
    return this.http.get<FilesModel[]>(`${this.url}/files`);
  }

  searchFiles(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/files/${id}`);
  }
 
  postFiles(filesModel: FilesModel): Observable<any>{
    return this.http.post<any>(`${this.url}/files`, {
      id: filesModel.id,
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  editFiles(filesModel: FilesModel): Observable<any>{
    return this.http.put<any>(`${this.url}/files/${filesModel.id}`, {
      id: filesModel.id,
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  deleteFiles(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/files/${id}`, 
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  uploadPersonalCv(formData: FormData): Observable<FilesNameModel>{
    return this.http.post<FilesNameModel>(`${this.url}/uploadPersonalCV`, {
      formData
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  uploadArkusCv(formData: FormData): Observable<FilesNameModel>{
    return this.http.post<FilesNameModel>(`${this.url}/uploadArkusCV`, {
      formData
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  uploadInterviewReport(formData: FormData): Observable<FilesNameModel>{
    return this.http.post<FilesNameModel>(`${this.url}/uploadInterviewReport`, {
      formData
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

}
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/generalData';
import { CoordinatorServiceService } from '../coordinatorService/coordinator-service.service';
import { FilesModel } from 'src/app/models/files.model';
import { PersonalCVModel } from '../../models/personalcv.model';
import { ArkusCVModel } from '../../models/arkuscv.model';
import { InterviewReportModel } from '../../models/interviewReport.model';

const MIME_TYPES = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}

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

  searchFiles(idUser: number): Observable<any>{
    return this.http.get<any>(`${this.url}/users/${idUser}/files`);
  }
 
  postFiles(idUser: number, filesModel: FilesModel): Observable<any>{
    return this.http.post<any>(`${this.url}/users/${idUser}/files`, {
      personal_cv: filesModel.personal_cv,
      arkus_cv: filesModel.arkus_cv,
      interview_report: filesModel.interview_report,
      user_id: filesModel.user_id
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  editFiles(filesModel: FilesModel): Observable<any>{
    return this.http.put<any>(`${this.url}/files/${filesModel.id}`, {
      personal_cv: filesModel.personal_cv,
      arkus_cv: filesModel.arkus_cv,
      interview_report: filesModel.interview_report,
      user_id: filesModel.user_id
    },
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  deleteFiles(idUser: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/users/${idUser}/files`, 
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  uploadPersonalCv(formData: FormData): Observable<PersonalCVModel>{
    return this.http.post<PersonalCVModel>(`${this.url}/uploadPersonalCV`, formData,
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  uploadArkusCv(formData: FormData): Observable<ArkusCVModel>{
    return this.http.post<ArkusCVModel>(`${this.url}/uploadArkusCV`, formData,
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  uploadInterviewReport(formData: FormData): Observable<InterviewReportModel>{
    return this.http.post<InterviewReportModel>(`${this.url}/uploadInterviewReport`, formData,
    {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}` 
      })
    });
  }

  downloadPersonalCV(filename: string): Observable<any>{
    const param = new HttpParams().set('filename', filename);
    const options = {
      params: param
    }
    return this.http.get(`${this.url}/downloadFiles/2/${filename}`, {...options, responseType: 'blob'});
  }

  downloadArkusCV(filename: string): Observable<any>{
    const param = new HttpParams().set('filename', filename);
    const options = {
      params: param
    }
    return this.http.get(`${this.url}/downloadFiles/1/${filename}`,  {...options, responseType: 'blob'});
  }

  downloadInterviewReport(filename: string): Observable<any>{
    const param = new HttpParams().set('filename', filename);
    const options = {
      params: param
    }
        return this.http.get(`${this.url}/downloadFiles/3/${filename}`, {...options, responseType: 'blob'});
  }

}
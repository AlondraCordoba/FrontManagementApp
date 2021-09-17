import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoordinatorModel } from '../../models/coordinator.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralData } from '../../config/generalData';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorServiceService {
  url: String = GeneralData.url; 
  dataSession: BehaviorSubject<CoordinatorModel> = new BehaviorSubject<CoordinatorModel>(new CoordinatorModel());

  constructor(private http: HttpClient) { 
    this.verifySession();
  }

  getUsers(): Observable<CoordinatorModel[]>{
    return this.http.get<CoordinatorModel[]>(`${this.url}/users`);
  }

  searchUser(id: number): Observable<CoordinatorModel>{
    return this.http.get<CoordinatorModel>(`${this.url}/users/${id}`);
  }
 
  postUser(coordModel: CoordinatorModel): Observable<any>{
    return this.http.post<any>(`${this.url}/users`, {
      name: coordModel.name,
      email: coordModel.email,
      password: coordModel.password,
      role_id: coordModel.role_id
    });
  }

  editUser(coordModel: CoordinatorModel): Observable<any>{
    return this.http.put<any>(`${this.url}/users/${coordModel.id}`, {
      name: coordModel.name,
      email: coordModel.email,
      password: coordModel.password,
      role_id: coordModel.role_id
    });
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/users/${id}`, 
    );
  }


  loginCoordinator(coordModel: CoordinatorModel): Observable<any>{
    return this.http.post<any>(`${this.url}/login`, {
      email: coordModel.email,
      password: coordModel.password
    },
    {
      headers: new HttpHeaders({
      })
    });
  }

  verifySession(){
    let data = localStorage.getItem("session-data");
    if(data){
      let dataObject: CoordinatorModel = JSON.parse(data);
      dataObject.isLoggedIn = true;
      this.refreshDataSession(dataObject);
    }
  }

  refreshDataSession(coordModel: CoordinatorModel){
    this.dataSession.next(coordModel);
  }

  getDataSession(){
    return this.dataSession.asObservable();
  }

  storeDataSessioninLocal(coordModel: CoordinatorModel): Boolean{
    let data = localStorage.getItem("session-data");
    if(data){
      return false;
    }else{
      let dataString = JSON.stringify(coordModel);
      localStorage.setItem("session-data", dataString);
      coordModel.isLoggedIn = true;
      this.refreshDataSession(coordModel);
      return true;
    }
  }

  logOut(){
    let data = localStorage.removeItem("session-data");
    this.refreshDataSession( new CoordinatorModel());
  }

  getToken(){
    let data = localStorage.getItem("session-data");
    if(data){
      let obj: CoordinatorModel = JSON.parse(data);
      return obj.tk;
    }else{
      return "";
    }
  }

  validateSessionToken():boolean{ 
    let data = localStorage.getItem("session-data");
    if(data){
      let obj: CoordinatorModel = JSON.parse(data);
      return true;
    }else{
      return false;
    }
  }
  
}

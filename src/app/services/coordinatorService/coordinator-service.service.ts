import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoordinatorModel } from '../../models/coordinator.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorServiceService {

  dataSession: BehaviorSubject<CoordinatorModel> = new BehaviorSubject<CoordinatorModel>(new CoordinatorModel());

  constructor(private http: HttpClient) { 
    this.verifySession();
  }

  loginCoordinator(coordModel: CoordinatorModel): Observable<any>{
    return this.http.post<any>(`http://localhost:3000/login`, {
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
  
}

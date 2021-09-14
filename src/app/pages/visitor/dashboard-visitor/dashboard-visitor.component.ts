import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/generalData';
import { UserModel } from 'src/app/models/user.model';
import { VacancieModel } from 'src/app/models/vacancie.model';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { VacancieServiceService } from '../../../services/vacancieService/vacancie-service.service';

@Component({
  selector: 'app-dashboard-visitor',
  templateUrl: './dashboard-visitor.component.html',
  styleUrls: ['./dashboard-visitor.component.css']
})
export class DashboardVisitorComponent implements OnInit {

  vacanciesList: VacancieModel[] = []; 
  vacanciesCount: any; 
  usersListMU: UserModel[] = [];
  usersListMT: UserModel[] = [];
  usersMUCount: any; 
  usersMTCount: any;
  vacancieInfo: VacancieModel = new VacancieModel;
  page: number = 1;
  numUVacancPage: number = GeneralData.numVacanforPage;
  id: any;

  constructor(private vacancieService: VacancieServiceService, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUsersMUT();
    this.getVacancies();
  }

  getUsersMUT(){
    this.userService.getUsers().subscribe(
      (data) => {
        this.usersListMU = data.filter(e => e.type_mind === 'Mind University');
        this.usersListMT = data.filter(e => e.type_mind === 'Mind Teams');
        this.usersMTCount = this.usersListMT.length;
        this.usersMUCount = this.usersListMU.length;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  getId (idVacancie?: number){
    this.id = idVacancie;
    this.searchVacancie();
  }
  
  changePage(pg: number){
    this.page = pg;
  }
  
  getVacancies(){
    this.vacancieService.getVacancies().subscribe(
      (data) => {
        this.vacanciesList = data;
        this.vacanciesCount = data.length;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }
  
  searchVacancie(){
    this.vacancieService.searchVacancie(this.id).subscribe(
      (data)=>{
  
        this.vacancieInfo = data;
      },
      (error)=>{
        alert("User not found" + this.id)
      }
    )
  }


}

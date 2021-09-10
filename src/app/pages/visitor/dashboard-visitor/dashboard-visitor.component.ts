import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/generalData';
import { VacancieModel } from 'src/app/models/vacancie.model';
import { VacancieServiceService } from '../../../services/vacancieService/vacancie-service.service';


@Component({
  selector: 'app-dashboard-visitor',
  templateUrl: './dashboard-visitor.component.html',
  styleUrls: ['./dashboard-visitor.component.css']
})
export class DashboardVisitorComponent implements OnInit {

  vacanciesList: VacancieModel[] = []; 
  vacanciesCount: any; 
  vacancieInfo: VacancieModel = new VacancieModel;
  page: number = 1;
  numUVacancPage: number = GeneralData.numVacanforPage;
  id: any;

  constructor(private vacancieService: VacancieServiceService) { }

  ngOnInit(): void {
    this.getVacancies();
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

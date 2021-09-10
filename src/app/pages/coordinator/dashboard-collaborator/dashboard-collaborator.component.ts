import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/generalData';
import { VacancieModel } from 'src/app/models/vacancie.model';
import { VacancieServiceService } from '../../../services/vacancieService/vacancie-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-collaborator',
  templateUrl: './dashboard-collaborator.component.html',
  styleUrls: ['./dashboard-collaborator.component.css']
})
export class DashboardCollaboratorComponent implements OnInit {

  vacanciesList: VacancieModel[] = []; 
  vacanciesCount: any; 
  vacancieInfo: VacancieModel = new VacancieModel;
  page: number = 1;
  numUVacancPage: number = GeneralData.numVacanforPage;
  id: any;
  fGValid: FormGroup = new FormGroup({});
  fGValidEdit: FormGroup = new FormGroup({});
  fGValidDelete: FormGroup = new FormGroup({});


  constructor(private vacancieService: VacancieServiceService, private fb: FormBuilder) { }

  buildForm(){
    this.fGValid= this.fb.group({
      technology: ['',[Validators.required]],
      seniority: ['',[Validators.required]],
      trial_Account: ['',[Validators.required]],
      description: ['',[]],
    });
  }

  buildFormEdit(){
    this.fGValidEdit= this.fb.group({
      technology: ['',[Validators.required]],
      seniority: ['',[Validators.required]],
      trial_Account: ['',[Validators.required]],
      description: ['',[]],
    });
  }

  ngOnInit(): void {
    this.getVacancies();
    this.getVacanciesCount();
    this.buildForm();
    this.buildFormEdit();
  }

  get obtainFGValidator(){
    return this.fGValid.controls;
  }
  get obtainFGValidatorEdit(){
    return this.fGValidEdit.controls;
  } 

  getId (idVacancie?: number){
    this.id = idVacancie;
    this.searchVacancie();
  }

  getVacancies(){
    this.vacancieService.getVacancies().subscribe(
      (data) => {
        this.vacanciesList = data;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  getVacanciesCount(){
    this.vacancieService.getVacanciesCount().subscribe(
      (data) => {
        this.vacanciesCount = data;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  changePage(pg: number){
    this.page = pg;
  }

  addVacancie(){
    let technology = this.obtainFGValidator.technology.value;
    let seniority = this.obtainFGValidator.seniority.value;
    let trial_Account = this.obtainFGValidator.trial_Account.value;
    let description = this.obtainFGValidator.description.value;

    let vacancieModel: VacancieModel = new VacancieModel();
    vacancieModel.technology = technology;
    vacancieModel.seniority = seniority;
    vacancieModel.trial_Account = trial_Account;
    vacancieModel.description = description;

    console.log(vacancieModel);

    this.vacancieService.postVacancie(vacancieModel).subscribe(
      (data) =>{
        alert("Vacancie inserted successfully"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error insering user");
      }
    )
  }

  searchVacancie(){
    this.vacancieService.searchVacancie(this.id).subscribe(
      (data)=>{
        this.obtainFGValidatorEdit.id.setValue(data.id);
        this.obtainFGValidatorEdit.technology.setValue(data.technology);
        this.obtainFGValidatorEdit.seniority.setValue(data.seniority);
        this.obtainFGValidatorEdit.trial_Account.setValue(data.trial_Account);
        this.obtainFGValidatorEdit.description.setValue(data.description);
        this.vacancieInfo = data;
      },
      (error)=>{
        alert("User not found" + this.id)
      }
    )
  }

  editVacancie(){
    let technology = this.obtainFGValidator.technology.value;
    let seniority = this.obtainFGValidator.seniority.value;
    let trial_Account = this.obtainFGValidator.trial_Account.value;
    let description = this.obtainFGValidator.description.value;

    let vacancieModel: VacancieModel = new VacancieModel();
    vacancieModel.technology = technology;
    vacancieModel.seniority = seniority;
    vacancieModel.trial_Account = trial_Account;
    vacancieModel.description = description;

    console.log(vacancieModel);

    this.vacancieService.editVacancie(vacancieModel).subscribe(
      (data) =>{
        alert("User successfully updated"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error uptaded user");
      }
    )
  }

  deleteVacancie(){
    this.vacancieService.deleteVacancie(this.id).subscribe(
      (data) =>{
        alert("User successfully deleted"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error deleting user");
      }
    )
  }

}
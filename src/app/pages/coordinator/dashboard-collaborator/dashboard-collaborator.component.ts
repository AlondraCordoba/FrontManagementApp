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
  count: any;
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
      id: [{value: '', disabled: true}],
      technology: ['',[Validators.required]],
      seniority: ['',[Validators.required]],
      trial_Account: ['',[Validators.required]],
      description: ['',[]],
      date_vacancy: [{value: '', disabled: true}],
    });
  }

  ngOnInit(): void {
    this.getVacancies();
    this.getVacanciesCount();
    this.buildForm();
    this.buildFormEdit();
    this.getVacanciesCount();
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
        console.log(data)
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
        this.obtainFGValidatorEdit.date_vacancy.setValue(data.date_vacancy);
        this.vacancieInfo = data;
      },
      (error)=>{
        alert("User not found" + this.id)
      }
    )
  }

  editVacancie(){
    let id = this.obtainFGValidatorEdit.id.value;
    let technology = this.obtainFGValidatorEdit.technology.value;
    let seniority = this.obtainFGValidatorEdit.seniority.value;
    let trial_Account = this.obtainFGValidatorEdit.trial_Account.value;
    let description = this.obtainFGValidatorEdit.description.value;
    let date_vacancy = this.obtainFGValidatorEdit.date_vacancy.value;

    let vacancieModel: VacancieModel = new VacancieModel();
    vacancieModel.technology = technology;
    vacancieModel.id = id;
    vacancieModel.date_vacancy = date_vacancy;
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
        alert("Vacancie successfully deleted"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error deleting user");
      }
    )
  }


}
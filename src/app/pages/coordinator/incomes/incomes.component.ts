import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { UserServiceService } from '../../../services/userService/user-service.service';
import { CityServiceService } from 'src/app/services/cityService/city-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/generalData';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  usersList: UserModel[] = [];
  page: number = 1;
  numUsersPage: number = GeneralData.numUsersforPage;
  fGValid: FormGroup = new FormGroup({});
  today: number = Date.now();

  constructor(private userService: UserServiceService, private fb: FormBuilder, private cityServive: CityServiceService) { }

  buildForm(){
    this.fGValid= this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      full_name: ['',[Validators.required, Validators.minLength(8)]],
      phone: ['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      city: ['',[Validators.required]],
      venue: ['',[Validators.required]],
      origin_type: ['',[Validators.required]],
      english_level: ['', [Validators.required]],
      type_mind: ['', [Validators.required]],
      date_entry_mind: ['', [Validators.required]],
      days_mind: ['', []],
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.buildForm();
  }

  get obtainFGValidator(){
    return this.fGValid.controls;
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (data) => {
        this.usersList = data;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  changePage(pg: number){
    this.page = pg;
  }

  addUser(){
    let full_name = this.obtainFGValidator.full_name.value;
    let phone = this.obtainFGValidator.phone.value;
    let city = this.obtainFGValidator.city.value;
    let venue = this.obtainFGValidator.venue.value;
    let origin_type = this.obtainFGValidator.origin_type.value;
    let english_level = this.obtainFGValidator.english_level.value;
    let type_mind = this.obtainFGValidator.type_mind.value;
    let date_entry_mind = this.obtainFGValidator.date_entry_mind.value;
    let email = this.obtainFGValidator.email.value;
    let days_mind = this.obtainFGValidator.days_mind.value;

    let userModel: UserModel = new UserModel();
    userModel.full_name = full_name;
    userModel.phone = phone;
    userModel.city = city;
    userModel.venue = venue;
    userModel.origin_type = origin_type;
    userModel.english_level = english_level;
    userModel.type_mind = type_mind;
    userModel.email = email;
    userModel.days_mind = days_mind;
    userModel.date_entry_mind = date_entry_mind;

    console.log(userModel);

    this.userService.postUser(userModel).subscribe(
      (data) =>{
        alert("User inserted successfully"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error insering user");
      }
    )
  }

  editUser(){
    let full_name = this.obtainFGValidator.full_name.value;
    let phone = this.obtainFGValidator.phone.value;
    let city = this.obtainFGValidator.city.value;
    let venue = this.obtainFGValidator.venue.value;
    let origin_type = this.obtainFGValidator.origin_type.value;
    let english_level = this.obtainFGValidator.english_level.value;
    let type_mind = this.obtainFGValidator.type_mind.value;
    let date_entry_mind = this.obtainFGValidator.date_entry_mind.value;
    let email = this.obtainFGValidator.email.value;
    let days_mind = this.obtainFGValidator.days_mind.value;

    let userModel: UserModel = new UserModel();
    userModel.full_name = full_name;
    userModel.phone = phone;
    userModel.city = city;
    userModel.venue = venue;
    userModel.origin_type = origin_type;
    userModel.english_level = english_level;
    userModel.type_mind = type_mind;
    userModel.email = email;
    userModel.days_mind = days_mind;
    userModel.date_entry_mind = date_entry_mind;

    console.log(userModel);

    this.userService.editUser(userModel).subscribe(
      (data) =>{
        alert("User inserted successfully"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error insering user");
      }
    )
  }

}
 
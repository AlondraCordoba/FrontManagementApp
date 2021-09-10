import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { UserServiceService } from '../../../services/userService/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/generalData';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  usersList: UserModel[] = [];
  userInfo: UserModel = new UserModel;
  id: any;
  page: number = 1;
  numUsersPage: number = GeneralData.numUsersforPage;
  fGValid: FormGroup = new FormGroup({});
  fGValidEdit: FormGroup = new FormGroup({});
  fGValidDelete: FormGroup = new FormGroup({});
  today: number = Date.now();

  constructor(private userService: UserServiceService, private fb: FormBuilder) { }

  buildForm(){
    this.fGValid= this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      full_name: ['',[Validators.required, ]],
      phone: ['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      city: ['',[Validators.required]],
      venue: ['',[Validators.required]],
      origin_type: ['',[Validators.required]],
      english_level: ['', [Validators.required]],
      type_mind: ['', [Validators.required]],
      date_entry_mind: ['', [Validators.required]],
      // days_mind:[{value: '', disabled: true}]
    });
  }

  buildFormEdit(){
    this.fGValidEdit= this.fb.group({
      id: [{value: '', disabled: true}],
      email: ['',[Validators.required, Validators.email]],
      full_name: ['',[Validators.required ]],
      phone: ['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      city: ['',[Validators.required]],
      venue: ['',[Validators.required]],
      origin_type: ['',[Validators.required]],
      english_level: ['', [Validators.required]],
      type_mind: ['', [Validators.required]],
      date_entry_mind: ['', [Validators.required]],
      days_mind: [{value: '', disabled: true}],
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.buildForm();
    this.buildFormEdit();
  }

  get obtainFGValidator(){
    return this.fGValid.controls;
  }
  get obtainFGValidatorEdit(){
    return this.fGValidEdit.controls;
  } 

  getId (idUser?: number){
    this.id = idUser;
    this.searchUser();
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

    let userModel: UserModel = new UserModel();
    userModel.full_name = full_name;
    userModel.phone = phone;
    userModel.city = city;
    userModel.venue = venue;
    userModel.origin_type = origin_type;
    userModel.english_level = english_level;
    userModel.type_mind = type_mind;
    userModel.email = email;
    userModel.date_entry_mind = date_entry_mind;

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

  searchUser(){
    this.userService.searchUser(this.id).subscribe(
      (data)=>{
        this.obtainFGValidatorEdit.id.setValue(data.id);
        this.obtainFGValidatorEdit.full_name.setValue(data.full_name);
        this.obtainFGValidatorEdit.email.setValue(data.email);
        this.obtainFGValidatorEdit.phone.setValue(data.phone);
        this.obtainFGValidatorEdit.city.setValue(data.city);
        this.obtainFGValidatorEdit.venue.setValue(data.venue);
        this.obtainFGValidatorEdit.origin_type.setValue(data.origin_type);
        this.obtainFGValidatorEdit.english_level.setValue(data.english_level);
        this.obtainFGValidatorEdit.type_mind.setValue(data.type_mind);
        this.obtainFGValidatorEdit.date_entry_mind.setValue(data.date_entry_mind);
        this.obtainFGValidatorEdit.days_mind.setValue(data.days_mind);
        this.userInfo = data;
      },
      (error)=>{
        alert("User not found" + this.id)
      }
    )
  }

  editUser(){
    let id = this.obtainFGValidatorEdit.id.value;
    let full_name = this.obtainFGValidatorEdit.full_name.value;
    let phone = this.obtainFGValidatorEdit.phone.value;
    let city = this.obtainFGValidatorEdit.city.value;
    let venue = this.obtainFGValidatorEdit.venue.value;
    let origin_type = this.obtainFGValidatorEdit.origin_type.value;
    let english_level = this.obtainFGValidatorEdit.english_level.value;
    let type_mind = this.obtainFGValidatorEdit.type_mind.value;
    let date_entry_mind = this.obtainFGValidatorEdit.date_entry_mind.value;
    let email = this.obtainFGValidatorEdit.email.value;
    let days_mind = this.obtainFGValidatorEdit.days_mind.value;

    let userModel: UserModel = new UserModel();
    userModel.id = id;
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

    this.userService.editUser(userModel).subscribe(
      (data) =>{
        alert("User successfully updated"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error uptaded user");
      }
    )
  }
 
  deleteUser(){
    this.userService.deleteUser(this.id).subscribe(
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
  
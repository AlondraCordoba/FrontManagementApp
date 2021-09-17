import { Component, OnInit } from '@angular/core';
import { TestModel } from '../../../models/tests.model';
import { UserModel } from '../../../models/user.model';
import { TestServiceService } from '../../../services/testService/test-service.service';
import { UserServiceService } from '../../../services/userService/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoordinatorModel } from '../../../models/coordinator.model';
import { CoordinatorServiceService } from '../../../services/coordinatorService/coordinator-service.service';
import { RoleModel } from '../../../models/role.model';

@Component({
  selector: 'app-manage-coord',
  templateUrl: './manage-coord.component.html',
  styleUrls: ['./manage-coord.component.css']
})
export class ManageCoordComponent implements OnInit {
  coordList: CoordinatorModel[] = [];
  rolesList: RoleModel [] = [];

  usersList: UserModel[] = [];
  testListResults: TestModel[] = [];
  testInfo: TestModel = new TestModel;
  id: any;
  fGValid: FormGroup = new FormGroup({});
  fGValidEdit: FormGroup = new FormGroup({});
  fGValidDelete: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private testService: TestServiceService, private coordService: CoordinatorServiceService) { }

  buildForm(){
    this.fGValid= this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      name: ['',[Validators.required, Validators.pattern("[a-zA-Z ]{2,254}")]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      role_id: ['',[Validators.required]],
    });
  }

  buildFormEdit(){
    this.fGValidEdit= this.fb.group({
      id: [{value: '', disabled: true}],
      email: ['',[Validators.required, Validators.email]],
      name: ['',[Validators.required, Validators.pattern("[a-zA-Z ]{2,254}")]],
      password: [{value: '', disabled: true}],
      role_id: ['',[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.buildForm();
    this.buildFormEdit();
    this.getRoles();
  }

  getUsers(){
    this.coordService.getUsers().subscribe(
      (data) => {
        this.coordList = data;
        console.log(this.coordList)
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  getRoles(){
    this.coordService.getRoles().subscribe(
      (data) => {
        this.rolesList = data;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  get obtainFGValidator(){
    return this.fGValid.controls;
  }
  get obtainFGValidatorEdit(){
    return this.fGValidEdit.controls;
  } 

  getId (idCoord?: any){
    this.id = idCoord;
  }

  adCoordinator(){
    let name = this.obtainFGValidator.name.value;
    let email = this.obtainFGValidator.email.value;
    let password = this.obtainFGValidator.password.value;
    let role_id = this.obtainFGValidator.role_id.value;

    let coordModel: CoordinatorModel = new CoordinatorModel();
    coordModel.name = name;
    coordModel.email = email;
    coordModel.password = password;
    coordModel.role_id = role_id;

    this.coordService.postUser(coordModel).subscribe(
      (data) =>{
        alert("Coordinator inserted successfully"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error insering coordintaor");
      }
    )
  }

  deleteCoordinator(){
    this.coordService.deleteUser(this.id).subscribe(
      (data) =>{
        alert("Coordinator successfully deleted"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error deleting coordinator");
      }
    )
  }

}
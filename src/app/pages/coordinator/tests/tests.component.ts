import { Component, OnInit } from '@angular/core';
import { TestModel } from '../../../models/tests.model';
import { UserModel } from '../../../models/user.model';
import { TestServiceService } from '../../../services/testService/test-service.service';
import { UserServiceService } from '../../../services/userService/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  usersList: UserModel[] = [];
  testListResults: TestModel[] = [];
  testInfo: TestModel = new TestModel;
  id: any;
  fGValid: FormGroup = new FormGroup({});
  fGValidEdit: FormGroup = new FormGroup({});
  fGValidDelete: FormGroup = new FormGroup({});

  constructor(private userService: UserServiceService, private fb: FormBuilder, private testService: TestServiceService) { }

  buildForm(){
    this.fGValid= this.fb.group({
      technology: ['',[Validators.required]],
      date: ['',[Validators.required, Validators.pattern("(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))")]],
      score: ['',[Validators.required]],
      user_id: ['',[Validators.required]],
    });
  }

  buildFormEdit(){
    this.fGValidEdit= this.fb.group({
      id: [{value: '', disabled: true}],
      technology: ['',[Validators.required]],
      date: ['',[Validators.required, Validators.pattern("(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))")]],
      score: ['',[Validators.required]],
      user_id: ['',[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.getTests();
    this.buildForm();
    this.buildFormEdit();
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

  get obtainFGValidator(){
    return this.fGValid.controls;
  }
  get obtainFGValidatorEdit(){
    return this.fGValidEdit.controls;
  } 

  getId (idTest?: number){
    this.id = idTest;
    this.searchVacancie();
  }
 
  getTests(){
    this.testService.getTests().subscribe(
      (data) => {
        this.testListResults = data;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  addTestResult(){
    let technology = this.obtainFGValidator.technology.value;
    let date = this.obtainFGValidator.date.value;
    let score = this.obtainFGValidator.score.value;
    let user_id = this.obtainFGValidator.user_id.value;

    let testModel: TestModel = new TestModel();
    testModel.technology = technology;
    testModel.date = date;
    testModel.score = score;
    testModel.user_id = user_id;

    console.log(testModel);

    this.testService.postTest(testModel).subscribe(
      (data) =>{
        alert("Test result inserted successfully"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error insering test result");
      }
    )
  }

  searchVacancie(){
    this.testService.searchTest(this.id).subscribe(
      (data)=>{
        this.obtainFGValidatorEdit.id.setValue(data.id);
        this.obtainFGValidatorEdit.technology.setValue(data.technology);
        this.obtainFGValidatorEdit.date.setValue(data.date);
        this.obtainFGValidatorEdit.score.setValue(data.score);
        this.obtainFGValidatorEdit.user_id.setValue(data.user_id);
        this.testInfo = data;
      },
      (error)=>{
        alert("User not found" + this.id)
      }
    )
  }

  editTestResult(){
    let id = this.obtainFGValidatorEdit.id.value;
    let technology = this.obtainFGValidatorEdit.technology.value;
    let date = this.obtainFGValidatorEdit.date.value;
    let score = this.obtainFGValidatorEdit.score.value;
    let user_id = this.obtainFGValidatorEdit.user_id.value;

    let testModel: TestModel = new TestModel();
    testModel.id = id;
    testModel.technology = technology;
    testModel.date = date;
    testModel.score = score;
    testModel.user_id = user_id;

    console.log(testModel);

    this.testService.editTest(testModel).subscribe(
      (data) =>{
        alert("Test result successfully updated"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error uptaded test result");
      }
    )
  }

  deleteTestResult(){
    this.testService.deletTest(this.id).subscribe(
      (data) =>{
        alert("Test result successfully deleted"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error deleting test result");
      }
    )
  }

}
 
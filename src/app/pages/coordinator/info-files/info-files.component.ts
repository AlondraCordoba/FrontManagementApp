import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { UserModel } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { FilesServiceService } from '../../../services/filesService/files-service.service';
import { FilesModel } from '../../../models/files.model';
import { GeneralData } from 'src/app/config/generalData';

@Component({
  selector: 'app-info-files',
  templateUrl: './info-files.component.html',
  styleUrls: ['./info-files.component.css']
})
export class InfoFilesComponent implements OnInit {

  usersList: UserModel[] = [];
  userFilesList: FilesModel[] = [];
  fGValid: FormGroup = new FormGroup({});
  page: number = 1;
  numUsersPage: number = GeneralData.numUsersforPage;
  fGValidEdit: FormGroup = new FormGroup({});
  fGValidDelete: FormGroup = new FormGroup({});
  today: number = Date.now();
  namePersonalFileCV: string | undefined = "Personal CV";
  nameArkusFileCV: string | undefined = "Arkus CV";
  nameInterviewFile: string | undefined = "Interview Report CV";  
  
  constructor(private userService: UserServiceService, private fb: FormBuilder, private infoFilesService: FilesServiceService) { }

  ngOnInit(): void {
    this.getUsers();
    this.buildForm();
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

  buildForm(){
    this.fGValid= this.fb.group({
      personal_cv: ['',[]],
      arkus_cv: ['',[]],
      interview_report: ['',[]], 
      personal_cv_file: ['',[]],
      arkus_cv_file: ['',[]],
      interview_report_file: ['',[]],
      user_id: ['',[]],
    });
  }

  changePage(pg: number){
    this.page = pg;
  }

  selectFilePCV(event: any){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.fGValid.controls.personal_cv_file.setValue(file, {emitModelToViewChange: false});
    }else{
      console.log("Action aborted")
    }
  }

  selectFileACV(event: any){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.fGValid.controls.arkus_cv_file.setValue(file, {emitModelToViewChange: false});
    }else{
      console.log("Action aborted")
    }
  }

  selectFileIR(event: any){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.fGValid.controls.interview_report_file.setValue(file, {emitModelToViewChange: false});
    }else{
      console.log("Action aborted")
    }
  }

  uploadPersonalCV(){
    let formData = new FormData();
    formData.append('file', this.fGValid.controls.personal_cv_file.value);
    this.infoFilesService.uploadPersonalCv(formData).subscribe(
      (data) => {
        this.namePersonalFileCV = data.filename;
        this.fGValid.controls.personal_cv.setValue(data.filename);
      }, (err) =>{
        alert("Error uploading file")
      }
    )
  }

  uploadArkusCV(){
    let formData = new FormData();
    formData.append('file', this.fGValid.controls.arkus_cv_file.value);
    this.infoFilesService.uploadArkusCv(formData).subscribe(
      (data) => {
        this.nameArkusFileCV = data.filename;
        this.fGValid.controls.arkus_cv.setValue(data.filename);
      }, (err) =>{
        alert("Error uploading file")
      }
    )
  }

  uploadInterviewReport(){
    let formData = new FormData();
    formData.append('file', this.fGValid.controls.interview_report_file.value);
    this.infoFilesService.uploadInterviewReport(formData).subscribe(
      (data) => {
        this.nameInterviewFile = data.filename;
        this.fGValid.controls.interview_report.setValue(data.filename);
      }, (err) =>{
        alert("Error uploading file")
      }
    )
  }

}

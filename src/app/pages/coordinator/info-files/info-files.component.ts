import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { FilesServiceService } from '../../../services/filesService/files-service.service';
import { FilesModel } from '../../../models/files.model';
import { GeneralData } from 'src/app/config/generalData';
import * as fileSaver from 'file-saver';

const MIME_TYPES = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}

@Component({
  selector: 'app-info-files',
  templateUrl: './info-files.component.html',
  styleUrls: ['./info-files.component.css']
})
export class InfoFilesComponent implements OnInit {

  usersList: UserModel[] = [];
  userFilesList: FilesModel[] = [];
  filesInfo: FilesModel = new FilesModel;
  fGValid: FormGroup = new FormGroup({});
  page: number = 1;
  numUsersPage: number = GeneralData.numUsersforPage;
  fGValidEdit: FormGroup = new FormGroup({});
  fGValidDelete: FormGroup = new FormGroup({});
  today: number = Date.now();
  namePersonalFileCV: String = "Personal CV";
  nameArkusFileCV: String = "Arkus CV";
  nameInterviewFile: String = "Interview Report CV";    
  namePersonalFileCVEdit: String = "Personal CV";
  nameArkusFileCVEdit: String = "Arkus CV";
  nameInterviewFileEdit: String = "Interview Report CV";  
  fileNameP: any;
  fileNameA: any;
  fileNameI: any;
  id: any;
  idU: any;
  
  constructor(private userService: UserServiceService, private fb: FormBuilder, private infoFilesService: FilesServiceService) { }

  ngOnInit(): void {
    this.getUsers();
    this.buildForm();
    this.getUsersFiles();
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

  buildFormEdit(){
    this.fGValidEdit= this.fb.group({
      id: [{value: '', disabled: true}],
      personal_cv: [{value: '', disabled: true}],
      arkus_cv: [{value: '', disabled: true}],
      interview_report: [{value: '', disabled: true}], 
      personal_cv_file: ['',[]],
      arkus_cv_file: ['',[]],
      interview_report_file: ['',[]],
      user_id: ['',[]],
    });
  }

  get obtainFGValidator(){
    return this.fGValid.controls;
  }
  get obtainFGValidatorEdit(){
    return this.fGValidEdit.controls;
  } 

  getId(idFiles?: number){
    this.id = idFiles;
    this.searchFiles();
  }

  getUserId(idUser?: number){
    this.idU = idUser;
  }

  searchFiles(){
    this.infoFilesService.searchFiles(this.id).subscribe(
      (data)=>{
        this.obtainFGValidatorEdit.id.setValue(data.id);
        this.obtainFGValidatorEdit.personal_cv.setValue(data.personal_cv);
        this.obtainFGValidatorEdit.arkus_cv.setValue(data.arkus_cv);
        this.obtainFGValidatorEdit.interview_report.setValue(data.interview_report);
        this.obtainFGValidatorEdit.user_id.setValue(data.user_id);
        this.filesInfo = data;
      },
      (error)=>{
        alert("User not found" + this.id)
      }
    )
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

  selectFilePCVEdit(event: any){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.fGValidEdit.controls.personal_cv_file.setValue(file, {emitModelToViewChange: false});
    }else{
      console.log("Action aborted")
    }
  }

  selectFileACVEdit(event: any){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.fGValidEdit.controls.arkus_cv_file.setValue(file, {emitModelToViewChange: false});
    }else{
      console.log("Action aborted")
    }
  }

  selectFileIREdit(event: any){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      this.fGValidEdit.controls.interview_report_file.setValue(file, {emitModelToViewChange: false});
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

  uploadPersonalCVEdit(){
    let formData = new FormData();
    formData.append('file', this.fGValidEdit.controls.personal_cv_file.value);
    this.infoFilesService.uploadPersonalCv(formData).subscribe(
      (data) => {
        this.namePersonalFileCVEdit = data.filename;
        this.fGValidEdit.controls.personal_cv.setValue(data.filename);
      }, (err) =>{
        alert("Error uploading file")
      }
    )
  }

  uploadArkusCVEdit(){
    let formData = new FormData();
    formData.append('file', this.fGValidEdit.controls.arkus_cv_file.value);
    this.infoFilesService.uploadArkusCv(formData).subscribe(
      (data) => {
        this.nameArkusFileCVEdit = data.filename;
        this.fGValidEdit.controls.arkus_cv.setValue(data.filename);
      }, (err) =>{
        alert("Error uploading file")
      }
    )
  }

  uploadInterviewReportEdit(){
    let formData = new FormData();
    formData.append('file', this.fGValidEdit.controls.interview_report_file.value);
    this.infoFilesService.uploadInterviewReport(formData).subscribe(
      (data) => {
        this.nameInterviewFileEdit = data.filename;
        this.fGValidEdit.controls.interview_report.setValue(data.filename);
      }, (err) =>{
        alert("Error uploading file")
      }
    )
  }

  addFiles(){
    this.idU = this.obtainFGValidator.user_id.value;
    let user_id = this.obtainFGValidator.user_id.value;
    let personal_cv = this.obtainFGValidator.personal_cv.value;
    let arkus_cv = this.obtainFGValidator.arkus_cv.value;
    let interview_report = this.obtainFGValidator.interview_report.value;

    let filesModel: FilesModel = new FilesModel();
    filesModel.user_id = user_id;
    filesModel.personal_cv = personal_cv;
    filesModel.arkus_cv = arkus_cv;
    filesModel.interview_report = interview_report;

    this.infoFilesService.postFiles(this.idU,filesModel).subscribe(
      (data) =>{
        alert("Files inserted successfully"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error insering user");
      }
    )
  }

  getUsersFiles(){
    this.infoFilesService.getFiles().subscribe(
      (data) => {
        this.userFilesList = data;
      },
      (error) => {
        alert(`Error: ${error}`);
      }
    )
  }

  getFilePersonal(filesNameP?: string){
    this.fileNameP = filesNameP;
    this.downloadFileP();
  }  
  getFileArkus(filesNameA?: string){
    this.fileNameA = filesNameA;
    this.downloadFileA();
  }  
  getFileInterviewR(filesNameI?: string){
    this.fileNameI = filesNameI;
    this.downloadFileA();
  }

  returnBlob(res: any): Blob {
    return new Blob([res], {type: `${MIME_TYPES}`})
  }

  downloadFileP(){
    this.infoFilesService.downloadPersonalCV(this.fileNameP).subscribe(
      (data) =>{
        const blob = new Blob([data], {type: 'aplication/pdf'});
        const filename = `${this.fileNameP}`;
        fileSaver.saveAs(blob, filename)
        alert("File successfully downloaded"); 
      },
      (err) =>{
        alert("Error downloaded file");
      }
    )
  }

  downloadFileA(){
    this.infoFilesService.downloadArkusCV(this.fileNameA).subscribe(
      (data) =>{
        const blob = new Blob([data], {type: 'aplication/pdf'});
        const filename = `${this.fileNameA}`;
        fileSaver.saveAs(blob, filename)
        alert("File successfully downloaded"); 
      },
      (err) =>{
        alert("Error downloaded file");
      }
    )
  }

  downloadFileI(){
    this.infoFilesService.downloadInterviewReport(this.fileNameI).subscribe(
      (data) =>{ 
        const blob = new Blob([data], {type: 'aplication/pdf'});
        const filename = `${this.fileNameI}`;
        fileSaver.saveAs(blob, filename)
        alert("File successfully downloaded"); 
      },
      (err) =>{
        alert("Error downloaded file");
      }
    )
  }

  editFilesInfo(){
    let id = this.obtainFGValidatorEdit.id.value;
    let user_id = this.obtainFGValidatorEdit.user_id.value;
    let personal_cv = this.obtainFGValidatorEdit.personal_cv.value;
    let arkus_cv = this.obtainFGValidatorEdit.arkus_cv.value;
    let interview_report = this.obtainFGValidatorEdit.interview_report.value;

    let filesModel: FilesModel = new FilesModel();
    filesModel.id = id;
    filesModel.user_id = user_id;
    filesModel.personal_cv = personal_cv;
    filesModel.arkus_cv = arkus_cv;
    filesModel.interview_report = interview_report;

    this.infoFilesService.editFiles(filesModel).subscribe(
      (data) =>{
        alert("Files successfully updated"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error uptaded files");
      }
    )
  }

  deleteFilesInfo(){
    this.infoFilesService.deleteFiles(this.idU).subscribe(
      (data) =>{
        alert("Info Files successfully deleted"); 
        window.location.reload();
      },
      (err) =>{
        alert("Error deleting info files");
      }
    )
  }
  
  
}

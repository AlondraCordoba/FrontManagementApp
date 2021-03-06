import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoordinatorServiceService } from '../../../services/coordinatorService/coordinator-service.service';
import * as crypto from 'crypto-js';
import { CoordinatorModel } from '../../../models/coordinator.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  fGValid: FormGroup = new FormGroup({});

  constructor( private router: Router, private fb: FormBuilder, private coordService: CoordinatorServiceService) { }

  buildForm(){
    this.fGValid= this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }


  get obtainFGValidator(){
    return this.fGValid.controls;
  }

  validateCredentials(){
    if (this.fGValid.invalid) {
      alert ("Invalid form")
    } else {
      let email = this.obtainFGValidator.email.value;
      let password = this.obtainFGValidator.password.value;
      let encryPassword = crypto.MD5(password).toString();

      let model = new CoordinatorModel();
      model.email = email;
      model.password = encryPassword;

      this.coordService.loginCoordinator(model).subscribe(
        (data: CoordinatorModel) =>{
          alert("Correct Data")
          this.coordService.storeDataSessioninLocal(data);
          // this.router.navigate(['/coordinator/homeCoordinator']);
        },
        (error) =>{
          // alert("Invalid Data" + error)
          alert("Invalid Data")
        }
      )
    }
  }

}

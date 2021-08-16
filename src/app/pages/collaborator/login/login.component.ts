import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  
  constructor( private router: Router) { }

  goHome(){ this.router.navigate(['/home']);}
  logIn(){
    if(this.email == 'admin@arkus.com' && this.password=='pass1234'){
      this.router.navigate(['/homeCollaborator'])
    }
  }

  ngOnInit(): void {
  }

}
 
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
  logIn(){ this.router.navigate(['/homeCoordinator']);}

  ngOnInit(): void {
  }

}
 
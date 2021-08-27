import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-visitor',
  templateUrl: './side-visitor.component.html',
  styleUrls: ['./side-visitor.component.css']
})
export class SideVisitorComponent implements OnInit {

  constructor( private router: Router ) { }

  goHome(){ this.router.navigate(['/home']);}
  goDashboard(){ this.router.navigate(['/dashboard']);}
  goDetailsUsers(){ this.router.navigate(['/detailsUsers']);}
  goReports(){ this.router.navigate(['/reports']);}
  goLogin(){ this.router.navigate(['/login']);}

  ngOnInit(): void {
      //Toggle Click Function
      $(document).ready(function () {
        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
        });
  }

}

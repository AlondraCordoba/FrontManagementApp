import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-collaborator',
  templateUrl: './side-collaborator.component.html',
  styleUrls: ['./side-collaborator.component.css']
})
export class SideCollaboratorComponent implements OnInit {

  constructor( private router: Router ) { }

  goHome(){ this.router.navigate(['/homeCollaborator']);}
  goDashboard(){ this.router.navigate(['/dashboardCollaborator']);}
  goIncome(){ this.router.navigate(['/income']);}
  goTests(){ this.router.navigate(['/tests']);}
  goInfoFilesIncomes(){ this.router.navigate(['/infoFilesIncomes']);}
  goLogout(){ this.router.navigate(['/login']);}

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

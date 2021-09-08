import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoordinatorServiceService } from '../../../services/coordinatorService/coordinator-service.service';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar-visit',
  templateUrl: './sidebar-visit.component.html',
  styleUrls: ['./sidebar-visit.component.css']
})
export class SidebarVisitComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor( private router: Router, private coordService: CoordinatorServiceService) { }
  // Visitor
  goHome(){ this.router.navigate(['/home']);}
  goDashboard(){ this.router.navigate(['/visitor/dashboard']);}
  goDetailsUsers(){ this.router.navigate(['/visitor/detailsUsers']);}
  goReports(){ this.router.navigate(['/visitor/reports']);}
  goLogin(){ this.router.navigate(['/login']);}
// Coordinator
  goHomeC(){ this.router.navigate(['/coordinator/homeCoordinator']);}
  goDashboardC(){ this.router.navigate(['/coordinator/dashboardCoordinator']);}
  goUsers(){ this.router.navigate(['/coordinator/users']);}
  goTests(){ this.router.navigate(['/coordinator/tests']);}
  goInfoFilesUsers(){ this.router.navigate(['/coordinator/infoFilesUsers']);}
  goReportsC(){ this.router.navigate(['/coordinator/reportsCoordinator']);}

  suscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.suscription = this.coordService.getDataSession().subscribe(
      (data) => {
        this.isLoggedIn = data.isLoggedIn;
        console.log(data);
      },
      (error) =>{
        console.log(error)
      }
    );
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
  
  logOut(){
    this.coordService.logOut();
    this.router.navigate(['/home']);
  }

}

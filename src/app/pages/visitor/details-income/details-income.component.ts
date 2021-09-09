import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/generalData';
import { UserModel } from '../../../models/user.model';
import { UserServiceService } from '../../../services/userService/user-service.service';

@Component({
  selector: 'app-details-income',
  templateUrl: './details-income.component.html',
  styleUrls: ['./details-income.component.css']
})
export class DetailsIncomeComponent implements OnInit {

  usersList: UserModel[] = [];
  page: number = 1;
  numUsersPage: number = GeneralData.numUsersforPage;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
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

  changePage(pg: number){
    this.page = pg;
  }

}

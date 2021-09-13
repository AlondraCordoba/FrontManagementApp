import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/generalData';
import { UserModel } from '../../../models/user.model';
import { UserServiceService } from '../../../services/userService/user-service.service';
import { TestServiceService } from '../../../services/testService/test-service.service';
import { TestModel } from '../../../models/tests.model';

@Component({
  selector: 'app-details-income',
  templateUrl: './details-income.component.html',
  styleUrls: ['./details-income.component.css']
})
export class DetailsIncomeComponent implements OnInit {
 
  usersList: UserModel[] = [];
  page: number = 1;
  numUsersPage: number = GeneralData.numUsersforPage;
  userInfo: UserModel = new UserModel;
  testsUsersList: TestModel[] = [];
  id: any;

  constructor(private userService: UserServiceService, private testService: TestServiceService) { }

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

  getId (idUser?: number){
    this.id = idUser;
    this.searchUser();
    this.searchTest();
  }

  searchUser(){
    this.userService.searchUser(this.id).subscribe(
      (data)=>{
        this.userInfo = data;
      },
      (error)=>{
        alert("User not found" + this.id)
      }
    )
  }

  searchTest(){
    this.userService.getTestsUsers(this.id).subscribe(
      (data)=>{
        this.testsUsersList = data;
      },
      (error)=>{
      alert("Tests not found" + this.id)
      }
    )
  }


}

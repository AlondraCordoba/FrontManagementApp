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
  userInfo: UserModel = new UserModel;
  id: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (data) => {
        this.usersList = data;
        let dataMind = data.filter(data => {data.origin_type == 'Mind University'})
        console.log(dataMind); 
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


}

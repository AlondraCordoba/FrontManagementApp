import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-details-income',
  templateUrl: './details-income.component.html',
  styleUrls: ['./details-income.component.css']
})
export class DetailsIncomeComponent implements OnInit {

  usersList: UserModel[] = [];

  constructor() { }

  ngOnInit(): void {
 }

}

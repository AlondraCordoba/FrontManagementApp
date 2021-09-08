import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardVisitorComponent } from './dashboard-visitor/dashboard-visitor.component';
import { DetailsIncomeComponent } from './details-income/details-income.component';
import { ReportsVisitorComponent } from './reports-visitor/reports-visitor.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardVisitorComponent
  },
  {
    path: 'detailsUsers',
    component: DetailsIncomeComponent
  },
  {
    path: 'reports',
    component: ReportsVisitorComponent
  },
  {
    path: 'dashboard',
    component: DashboardVisitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }

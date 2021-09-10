import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoSessionValidatorGuard } from 'src/app/guards/no-session-validator.guard';
import { DashboardVisitorComponent } from './dashboard-visitor/dashboard-visitor.component';
import { DetailsIncomeComponent } from './details-income/details-income.component';
import { ReportsVisitorComponent } from './reports-visitor/reports-visitor.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardVisitorComponent,
    // canActivate: [NoSessionValidatorGuard]
  },
  {
    path: 'detailsUsers',
    component: DetailsIncomeComponent,
    // canActivate: [NoSessionValidatorGuard]
  },
  {
    path: 'reports',
    component: ReportsVisitorComponent,
    // canActivate: [NoSessionValidatorGuard]
  },
  {
    path: 'dashboard',
    component: DashboardVisitorComponent,
    // canActivate: [NoSessionValidatorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/visitor/home/home.component';
import { DashboardVisitorComponent } from './pages/visitor/dashboard-visitor/dashboard-visitor.component';
import { DetailsIncomeComponent } from './pages/visitor/details-income/details-income.component';
import { ReportsVisitorComponent } from './pages/visitor/reports-visitor/reports-visitor.component';

import { HomeCollaboratorComponent } from './pages/collaborator/home-collaborator/home-collaborator.component';
import { LoginComponent } from './pages/collaborator/login/login.component';
import { IncomesComponent } from './pages/collaborator/incomes/incomes.component';
import { DashboardCollaboratorComponent } from './pages/collaborator/dashboard-collaborator/dashboard-collaborator.component';
import { TestsComponent } from './pages/collaborator/tests/tests.component';
import { InfoFilesComponent } from './pages/collaborator/info-files/info-files.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardVisitorComponent},
  {path: 'detailsIncome', component: DetailsIncomeComponent},
  {path: 'reports', component: ReportsVisitorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homeCollaborator', component: HomeCollaboratorComponent},
  {path: 'dashboardCollaborator', component: DashboardCollaboratorComponent},
  {path: 'income', component: IncomesComponent},
  {path: 'infoFilesIncomes', component: InfoFilesComponent},
  {path: 'tests', component: TestsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

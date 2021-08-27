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
import { ReportsCollabComponent } from './pages/collaborator/reports-collab/reports-collab.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardVisitorComponent},
  {path: 'detailsUsers', component: DetailsIncomeComponent},
  {path: 'reports', component: ReportsVisitorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homeCoordinator', component: HomeCollaboratorComponent},
  {path: 'dashboardCoordinator', component: DashboardCollaboratorComponent},
  {path: 'users', component: IncomesComponent},
  {path: 'infoFilesUsers', component: InfoFilesComponent},
  {path: 'tests', component: TestsComponent},
  {path: 'reportsCoordinator', component: ReportsCollabComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCollaboratorComponent } from './home-collaborator/home-collaborator.component';
import { DashboardCollaboratorComponent } from './dashboard-collaborator/dashboard-collaborator.component';
import { IncomesComponent } from './incomes/incomes.component';
import { InfoFilesComponent } from './info-files/info-files.component';
import { TestsComponent } from './tests/tests.component';
import { ReportsCollabComponent } from './reports-collab/reports-collab.component';

const routes: Routes = [
  {
    path: 'homeCoordinator',
    component: HomeCollaboratorComponent,
  },
  {
    path: 'dashboardCoordinator',
    component: DashboardCollaboratorComponent,
  },
  {
    path: 'users',
    component: IncomesComponent,
  },
  {
    path: 'infoFilesUsers',
    component: InfoFilesComponent,
  },
  {
    path: 'tests',
    component: TestsComponent,
  },
  {
    path: 'reportsCoordinator',
    component: ReportsCollabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }

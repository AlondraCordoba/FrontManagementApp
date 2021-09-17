import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCollaboratorComponent } from './home-collaborator/home-collaborator.component';
import { DashboardCollaboratorComponent } from './dashboard-collaborator/dashboard-collaborator.component';
import { IncomesComponent } from './incomes/incomes.component';
import { InfoFilesComponent } from './info-files/info-files.component';
import { TestsComponent } from './tests/tests.component';
import { ReportsCollabComponent } from './reports-collab/reports-collab.component';
import { SessionValidatorGuard } from '../../guards/session-validator.guard';
import { ManageCoordComponent } from './manage-coord/manage-coord.component';

const routes: Routes = [
  {
    path: 'homeCoordinator',
    component: HomeCollaboratorComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: 'manageCoordinators',
    component: ManageCoordComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: 'dashboardCoordinator',
    component: DashboardCollaboratorComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: 'users',
    component: IncomesComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: 'infoFilesUsers',
    component: InfoFilesComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: 'tests',
    component: TestsComponent,
    canActivate: [SessionValidatorGuard]
  },
  {
    path: 'reportsCoordinator',
    component: ReportsCollabComponent,
    canActivate: [SessionValidatorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }

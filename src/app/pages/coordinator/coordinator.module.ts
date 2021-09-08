import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { DashboardCollaboratorComponent } from './dashboard-collaborator/dashboard-collaborator.component';
import { HomeCollaboratorComponent } from './home-collaborator/home-collaborator.component';
import { IncomesComponent } from './incomes/incomes.component';
import { InfoFilesComponent } from './info-files/info-files.component';
import { ReportsCollabComponent } from './reports-collab/reports-collab.component';
import { TestsComponent } from './tests/tests.component';
import { SidebarCoordComponent } from '../common/sidebar-coord/sidebar-coord.component';

@NgModule({
  declarations: [
    DashboardCollaboratorComponent,
    HomeCollaboratorComponent,
    IncomesComponent,
    InfoFilesComponent,
    ReportsCollabComponent,
    TestsComponent,
    SidebarCoordComponent
  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CoordinatorModule { }

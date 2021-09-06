import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/visitor/home/home.component';
import { LoginComponent } from './pages/coordinator/login/login.component';
import { IncomesComponent } from './pages/coordinator/incomes/incomes.component';
import { ReportsVisitorComponent } from './pages/visitor/reports-visitor/reports-visitor.component';
import { DashboardVisitorComponent } from './pages/visitor/dashboard-visitor/dashboard-visitor.component';
import { DashboardCollaboratorComponent } from './pages/coordinator/dashboard-collaborator/dashboard-collaborator.component';
import { TestsComponent } from './pages/coordinator/tests/tests.component';
import { InfoFilesComponent } from './pages/coordinator/info-files/info-files.component';
import { HomeCollaboratorComponent } from './pages/coordinator/home-collaborator/home-collaborator.component';
import { ReportsCollabComponent } from './pages/coordinator/reports-collab/reports-collab.component';
import { SidebarComponent } from './pages/common/sidebar/sidebar.component';
import { DetailsIncomeComponent } from './pages/visitor/details-income/details-income.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    IncomesComponent,
    ReportsVisitorComponent,
    DashboardVisitorComponent,
    DashboardCollaboratorComponent,
    TestsComponent,
    InfoFilesComponent,
    HomeCollaboratorComponent,
    ReportsCollabComponent,
    SidebarComponent,
    DetailsIncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

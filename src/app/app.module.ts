import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Para trabajar con formularios.
import { FormsModule } from '@angular/forms';
// Para hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';
// Para manejar/trabajar los formularios de manera reactiva.(formularios reactivos).
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/visitor/home/home.component';
import { DetailsIncomeComponent } from './pages/visitor/details-income/details-income.component';
import { LoginComponent } from './pages/collaborator/login/login.component';
import { IncomesComponent } from './pages/collaborator/incomes/incomes.component';
import { ReportsVisitorComponent } from './pages/visitor/reports-visitor/reports-visitor.component';
import { DashboardVisitorComponent } from './pages/visitor/dashboard-visitor/dashboard-visitor.component';
import { DashboardCollaboratorComponent } from './pages/collaborator/dashboard-collaborator/dashboard-collaborator.component';
import { TestsComponent } from './pages/collaborator/tests/tests.component';
import { InfoFilesComponent } from './pages/collaborator/info-files/info-files.component';
import { SideCollaboratorComponent } from './pages/collaborator/side-collaborator/side-collaborator.component';
import { SideVisitorComponent } from './pages/visitor/side-visitor/side-visitor.component';
import { HomeCollaboratorComponent } from './pages/collaborator/home-collaborator/home-collaborator.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    DetailsIncomeComponent,
    LoginComponent,
    IncomesComponent,
    ReportsVisitorComponent,
    DashboardVisitorComponent,
    DashboardCollaboratorComponent,
    TestsComponent,
    InfoFilesComponent,
    SideCollaboratorComponent,
    SideVisitorComponent,
    HomeCollaboratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

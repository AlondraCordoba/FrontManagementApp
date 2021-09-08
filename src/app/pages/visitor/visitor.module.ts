import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { VisitorRoutingModule } from './visitor-routing.module';
import { DashboardVisitorComponent } from './dashboard-visitor/dashboard-visitor.component';
import { DetailsIncomeComponent } from './details-income/details-income.component';
import { ReportsVisitorComponent } from './reports-visitor/reports-visitor.component';
import { SidebarVisitComponent } from '../common/sidebar-visit/sidebar-visit.component';

@NgModule({
  declarations: [
    DashboardVisitorComponent,
    DetailsIncomeComponent,
    ReportsVisitorComponent,
    SidebarVisitComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class VisitorModule { }

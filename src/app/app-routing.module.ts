import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/visitor/home/home.component';
import { LoginComponent } from './pages/common/login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'visitor',
    loadChildren: () => import('./pages/visitor/visitor.module').then(m => m.VisitorModule)
  },
  {
    path: 'coordinator',
    loadChildren: () => import('./pages/coordinator/coordinator.module').then(m => m.CoordinatorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

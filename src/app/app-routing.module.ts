import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/common/login/login.component';
import { SessionValidatorGuard } from './guards/session-validator.guard';
import { NoSessionValidatorGuard } from './guards/no-session-validator.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoSessionValidatorGuard]
  }
  // },
  // {
  //   path: 'visitor',
  //   loadChildren: () => import('./pages/visitor/visitor.module').then(m => m.VisitorModule),
  //   // canActivate: [NoSessionValidatorGuard]
  // },
  // {
  //   path: 'coordinator',
  //   loadChildren: () => import('./pages/coordinator/coordinator.module').then(m => m.CoordinatorModule),
  //   canActivate: [SessionValidatorGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

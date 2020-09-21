import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/project/project.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'employees', component: EmployeeComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: '404', component: NotFoundComponentComponent },
  {path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

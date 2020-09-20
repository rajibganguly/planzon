import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/project/project.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { HttpClientModule } from '@angular/common/http';;

//SERVICES
import { GeneralService } from './service/general.service';
import { FirebaseService } from './service/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    ProjectComponent,
    EmployeeComponent,
    PaymentsComponent,
    FooterComponent,
    UsersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GeneralService, FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

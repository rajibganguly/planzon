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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//SERVICES
import { GeneralService } from './service/general.service';
import { FirebaseService } from './service/firebase.service';
import { AuthService } from './service/auth-service.service';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';

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
    UsersDetailsComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GeneralService, FirebaseService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

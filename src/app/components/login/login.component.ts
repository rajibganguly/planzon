import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service.service';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  regForm: FormGroup;
  loginSection: boolean = true;
  registerSection: boolean = false;

  validation_messages = {
    fullName: [
      { type: 'required', message: 'Full Name is required.' },
      { type: 'minlength', message: 'Full Name must be at least 4 characters long.' },
      { type: 'maxlength', message: 'Full Name cannot be more than 100 characters long.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'maxlength', message: 'Password cannot be more than 32 characters long.' }
    ],
    companyName: [
      { type: 'required', message: 'Company Name is required.' },
      { type: 'minlength', message: 'Company Name must be at least 4 characters long.' },
      { type: 'maxlength', message: 'Company Name cannot be more than 100 characters long.' }
    ],
    emailId: [
        { type: 'required', message: 'Email id is required.' },
        { type: 'pattern', message: 'Your email is not valid email, please check.' }
      ]
  }

  constructor(
    private fb: FormBuilder, 
    private generalService: GeneralService,
    private auth: AuthService,
    private router: Router
  ) { 
    this.regForm = this.fb.group({
      fullName: ['', Validators.compose([
        Validators.maxLength(100),
        Validators.minLength(3),
        Validators.required
     ])],
      companyName: ['', Validators.required],
      emailId: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
      ])],
      password: ['', Validators.compose([
        Validators.maxLength(32),
        Validators.minLength(8),
        Validators.required
     ])]
    });
    this.loginForm = this.fb.group({
      emailId: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
      ])],
      password: ['', Validators.compose([
        Validators.maxLength(32),
        Validators.minLength(8),
        Validators.required
     ])]
    });
  }

  ngOnInit() {
    this.loginCheckFunc();
  }

  loginCheckFunc() {
    if(!this.auth.isLoggedIn) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  // OnClick Register
  regFormValue() {
    const regFormValueDetails = {
      companyName: this.regForm.value.companyName,
      emailId: this.regForm.value.emailId,
      fullName: this.regForm.value.fullName,
      password: this.regForm.value.password
    }
    localStorage.setItem('registerValue', JSON.stringify(regFormValueDetails));
    console.log(this.regForm.value);
    this.generalService.signUpWithEmailPassword(regFormValueDetails.emailId, regFormValueDetails.password);
    this.regForm.reset();
    this.goToLogin();
  }

  // OnClick Login
  loginFormValue() {
    console.log(this.loginForm.value);
    this.generalService.loginWithUserEmailPassword(this.loginForm.value.emailId, this.loginForm.value.password);
    this.loginForm.reset();    
  }

  goToRegister() {
    this.registerSection = true;
    this.loginSection = false;
  }

  goToLogin() {
    this.registerSection = false;
    this.loginSection = true;
  }

}

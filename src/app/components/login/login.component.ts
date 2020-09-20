import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSection: boolean = false;
  registerSection: boolean = true;

  constructor() { }

  ngOnInit() {
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

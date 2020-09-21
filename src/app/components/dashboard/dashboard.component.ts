import { DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

import { AuthService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  newBtnName: string = 'New Dashboard'; // New Button
  // editBoardFlag: boolean;

  constructor(
    private genService: GeneralService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginCheckFunc();
  }

  loginCheckFunc() {
    if(!this.auth.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  // ngDoCheck() {
  //   this.editBoardFlag = this.genService.getFlagOn();
  //   console.log(this.editBoardFlag);
  // }

}

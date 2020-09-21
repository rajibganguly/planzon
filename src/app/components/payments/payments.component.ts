import { DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service.service';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit, DoCheck {
  newBtnName: string = 'New Payment'; // New Button
  editBoardFlag: boolean;

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
    } else {
      this.router.navigate(['/payments']);
    }
  }

  ngDoCheck() {
    this.editBoardFlag = this.genService.getFlagOn();
    console.log(this.editBoardFlag);
  }

}

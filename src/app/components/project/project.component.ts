import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service.service';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, DoCheck {
  newBtnName: string = 'New Project'; // New Button
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
      this.router.navigate(['/projects']);
    }
  }

  ngDoCheck() {
    this.editBoardFlag = this.genService.getFlagOn();
    console.log(this.editBoardFlag);
  }

}

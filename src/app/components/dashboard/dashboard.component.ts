import { DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  newBtnName: string = 'New Dashboard'; // New Button
  // editBoardFlag: boolean;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
  }

  // ngDoCheck() {
  //   this.editBoardFlag = this.genService.getFlagOn();
  //   console.log(this.editBoardFlag);
  // }

}

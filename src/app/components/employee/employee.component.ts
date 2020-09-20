import { Component, DoCheck, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, DoCheck {
  newBtnName: string = 'New Employee'; // New Button
  editBoardFlag: boolean;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
    
    // this.genService.editBoxShow.subscribe(
    //   (res) => this.editBoardFlag = res
    // )
    //AfterViewChecked
  }

  ngDoCheck() {
    this.editBoardFlag = this.genService.getFlagOn();
    console.log(this.editBoardFlag);
  }

}

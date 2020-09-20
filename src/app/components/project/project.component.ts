import { Component, DoCheck, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, DoCheck {
  newBtnName: string = 'New Project'; // New Button
  editBoardFlag: boolean;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
    // this.genService.editBoxShow.subscribe(
    //   (res) => this.editBoardFlag = res
    // )
  }

  ngDoCheck() {
    this.editBoardFlag = this.genService.getFlagOn();
    console.log(this.editBoardFlag);
  }

}

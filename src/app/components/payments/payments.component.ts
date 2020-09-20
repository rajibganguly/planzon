import { DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit, DoCheck {
  newBtnName: string = 'New Payment'; // New Button
  editBoardFlag: boolean;

  constructor(private genService: GeneralService) { }

  ngOnInit() {}

  ngDoCheck() {
    this.editBoardFlag = this.genService.getFlagOn();
    console.log(this.editBoardFlag);
  }

}

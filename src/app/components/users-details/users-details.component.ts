import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  count: boolean;

  @Input() pcdata: string;
  pageFlagShow;

  constructor(private genService: GeneralService) { }

  ngOnInit() {
  }

  openNew() {
    
    this.pageFlagShow = this.genService.getFlagOn();
    if (this.pageFlagShow === true) {          
      this.genService.setFlagOn(false);
    }
    if (this.pageFlagShow === false) {          
      this.genService.setFlagOn(true);
    }
    console.log(this.pageFlagShow);
    
    // this.genService.editBoxShow.subscribe(
    //   (result) => {
    //     this.count = result;
    //     if (this.count === true) {          
    //       this.count = false;
    //       this.genService.editBoxShow.next(false);
    //       return this.count;
    //     } 
    //     if (this.count === false) {
    //       this.count = true;
    //       this.genService.editBoxShow.next(true);          
    //       return this.count;
    //     }       
    //     console.log(this.count, result);
    //   }
    // )
  }

}

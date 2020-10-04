import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  count: boolean;

  @Input() pcdata: string;
  pageFlagShow;
  dated: string;
  date = new Date();
  parseValue: object;

  dashboardSpecialScreen: boolean = false;

  constructor(private genService: GeneralService, private route: ActivatedRoute) {
    const path = route.snapshot.routeConfig.path;
    if (path === 'dashboard') this.dashboardSpecialScreen = true;
    else this.dashboardSpecialScreen = false;

    const localValue = localStorage.getItem('registerValue');
    this.parseValue = JSON.parse(localValue);
    // console.log(typeof(this.parseValue), this.parseValue);

    const curYr = this.date.getFullYear();
    const curMon = this.date.getMonth();
    const curDt = this.date.getDate();
    sessionStorage.setItem('toDaysDate', JSON.stringify(`${curYr}/${curMon+1}/${curDt}`))


    this.dated = `Today: ${curDt} ${this.returnMonth(curMon)}, ${curYr}`;

  }

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

  }

  returnMonth(month) {
    if (month === 0) return 'January'
    else if (month === 1) return 'February'
    else if (month === 2) return 'March'
    else if (month === 3) return 'April'
    else if (month === 4) return 'May'
    else if (month === 5) return 'June'
    else if (month === 6) return 'July'
    else if (month === 7) return 'August'
    else if (month === 8) return 'September'
    else if (month === 9) return 'October'
    else if (month === 10) return 'November'
    else if (month === 11) return 'December'
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  messages = new BehaviorSubject<string>('');
  webApi = environment.firebaseConfig.apiKey;
  localdetails = localStorage.getItem('locData');
  localdetailsJson = JSON.parse(this.localdetails);

  editBoxShow = new BehaviorSubject<boolean>(false);
  storeDisplayBoxFlag: boolean = false;

  constructor(
    private http: HttpClient,
    private route: Router
    ) { }

  // Edit box display
  getFlagOn() {
    return this.storeDisplayBoxFlag;
  }
  // Edit box display set
  setFlagOn(val: boolean) {
    this.storeDisplayBoxFlag = val;
  }


  

  updatedDataSelection(messagesTxt: string){
    this.messages.next(messagesTxt);
  }


}

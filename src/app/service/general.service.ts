import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Login, Register } from './../model/all-models.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  messages = new BehaviorSubject<string>('');
  webApi = environment.firebaseConfig.apiKey;
  localdetails = localStorage.getItem('localDataResponseRegister');
  localdetailsJson = JSON.parse(this.localdetails);

  editBoxShow = new BehaviorSubject<boolean>(false);
  storeDisplayBoxFlag: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  // Edit box display
  getFlagOn() {
    return this.storeDisplayBoxFlag;
  }
  // Edit box display set
  setFlagOn(val: boolean) {
    this.storeDisplayBoxFlag = val;
  }


  // signup
  signUpWithEmailPassword(email: string, password: string) {
    const emailpass = {
      email: email,
      password: password
    }
    if(this.localdetailsJson === null) {
      this.http.post<Register[]>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.webApi}`, emailpass).pipe(
        map(x => x)
      ).subscribe((response) => {
        const localDataResponseRegister = {
          "idToken": response['idToken'],
          "email": response['email'],
          "refreshToken": response['refreshToken'],
          "expiresIn": response['expiresIn'],
          "localId": response['localId'],
          "registerd": true
        }
        localStorage.setItem('locData', JSON.stringify(localDataResponseRegister));
      }, (error) => {
        console.log(error);
        this.updatedDataSelection(error.error.error.message);
        // this.route.navigate(['/register']);
      })
    } else {
      this.updatedDataSelection('You_already_registered_with_some_email._Please_contact_admin.');
      // this.route.navigate(['/register']);
    }    
    
  }
  

  // Login
  loginWithUserEmailPassword(email: string, password: string) {
    const emailpass = {
      email: email,
      password: password
    }
    this.http.post<Login[]>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.webApi}`, emailpass).pipe(
      map(x => x)
    ).subscribe((response) => {
      console.log(response['localId']);
      sessionStorage.setItem('localIdLogin', response['localId']);
      this.router.navigate(['/dashboard']); 
      setTimeout(function() {
        location.reload();
      }, 2000 );         
    }, (error) => {
      console.log(error.error);
      this.updatedDataSelection(error.error.error.message);
    })
    
  }



  updatedDataSelection(messagesTxt: string){
    this.messages.next(messagesTxt);
  }


}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  isLoggedIn: boolean;
  localdetails = sessionStorage.getItem('localIdLogin');

  constructor(private router: Router) {
    if(this.localdetails) {
      console.log('55555555555555555555555555555555', this.localdetails);
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

 

    
  
}

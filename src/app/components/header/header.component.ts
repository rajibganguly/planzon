import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service.service';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginOrLogout: string;

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
      this.loginOrLogout = 'LOGIN';
    } else {
      this.loginOrLogout = 'LOGOUT';
    }
  }

  signIn() {
    this.router.navigate(['/']);
    setTimeout(function() {
      location.reload();
    }, 100 ); 
  }

  signOut() {
    sessionStorage.removeItem('localIdLogin');
    this.router.navigate(['/']);
    setTimeout(function() {
      location.reload();
    }, 1000 ); 
  }

}

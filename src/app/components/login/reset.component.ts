import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-reset',
  template: '<div class="container" style="height:580px"><div class="d-flex justify-content-center"><div class="jumbotron loginbox m-4"><div class="display-4" style="font-size:2rem">Reset password!</div><form><div class="form-group"><label for="reset">Enter your email for Reset Password</label><input type="email" class="form-control" #resetPass id="reset"/></div><button class="btn btn-light" (click)="resetEmail(resetPass.value)">Reset</button></form></div></div></div>'
})
export class ResetComponent {

  @ViewChild('resetPass', {static: false}) resetPass: ElementRef;

    constructor(private generalService: GeneralService, private router: Router) {}

  
    resetEmail(s: string) {
      const email = s;
      console.log(email);
      this.generalService.resetPasswordMail(email);
      this.router.navigate(['/']);

    }

}

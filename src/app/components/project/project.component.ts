import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/service/auth-service.service';
import { GeneralService } from 'src/app/service/general.service';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, DoCheck {
  newBtnName: string = 'New Project'; // New Button
  editBoardFlag: boolean;
  companyCode: string;
  allProject: object;

  createProjectForm: FormGroup;

  projectType = [
    "Logo", "Brochure", "Maskot", "Website", "Other"
  ]

  constructor(
    private fb: FormBuilder, 
    private genService: GeneralService,
    private fbservice: FirebaseService,
    private auth: AuthService,
    private router: Router
    ) { 
      const stored = localStorage.getItem('registerValue');
      const companyCodeVal = JSON.parse(stored);
      this.companyCode = companyCodeVal.companyName.split(' ')[0];

      this.createProjectForm = this.fb.group({
        projectName: ['', Validators.required],
        projectType: ['', Validators.required],
        projectDescription: ['', Validators.required],
        projectValue: ['', Validators.required],
        paidAmount: ['', Validators.required]
      })
    }

  ngOnInit() {
    this.loginCheckFunc();    
  }

  loginCheckFunc() {
    if(!this.auth.isLoggedIn) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/projects']);
      this.fbservice.getAllProjects(this.companyCode).subscribe(
        (res) => {
          this.allProject = res;
        }
      )
    }
  }

  ngDoCheck() {
    this.editBoardFlag = this.genService.getFlagOn();
    // console.log(this.editBoardFlag);
  }

  createProjectFormValue() {
    

    const projectNew = {
      projectName: this.createProjectForm.value.projectName,
      projectType: this.createProjectForm.value.projectType,
      projectDescription: this.createProjectForm.value.projectDescription,
      projectValue: this.createProjectForm.value.projectValue,
      paidAmount: this.createProjectForm.value.paidAmount,
      user: this.companyCode,
      date: sessionStorage.getItem('toDaysDate'),
      designer: 'Not Assigned',
      projectStatus: false
    }
    
    this.fbservice.postNewProject(projectNew);
    this.createProjectForm.reset();
    location.reload();
  }

}

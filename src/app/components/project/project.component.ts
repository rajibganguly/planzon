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
  projectTypes: any[];
  projects: any[];
  projectsWithoutDesigner: any[];
  projectsWithDesigner: any[];
  designers: any[];

  // added before
  companyCode: string;

  createProjectForm: FormGroup;

  // projectType = [
  //   "Logo", "Brochure", "Maskot", "Website", "Other"
  // ]

  constructor(
    private fb: FormBuilder, 
    private genService: GeneralService,
    private fbservice: FirebaseService,
    private auth: AuthService,
    private router: Router
    ) { 

      // Types of projects data
      this.projectTypes = [
        { type: "Logo Design", value: "logo_design" },
        { type: "Brochure Design", value: "brochure_design"},
        { type: "Banner Design", value: "banner_design"},
        { type: "Maskot Design", value: "maskot_design"},
        { type: "Website Design", value: "website_design"},
        { type: "Application Design", value: "application_design"},
        { type: "Data entry", value: "data_entry"}
      ];

      // Lists of Employee
      this.designers = [
        {name: "Rahul Bhat", status: "Permanent"},
        {name: "Vikram Sinha", status: "Permanent"},
        {name: "Maria Sujukio", status: "Permanent"}
      ]

      // Project
      this.fbservice.getAllProjects(this.companyCode).subscribe(
        (res) => {
          this.projects = res;
          this.projectsWithoutDesigner = [];
          this.projectsWithDesigner = [];
          this.projects.filter((filtrValue) => {            
            if (filtrValue.designer === "nil") {              
              this.projectsWithoutDesigner.push(filtrValue);              
            } else {              
              this.projectsWithDesigner.push(filtrValue);
            }
          });


        }
      )
      // this.projects = [
      //   {
      //     name: "Doodle Batch",
      //     description: "Batch illustration create with 2 colors, black and white. Batch is specially for creating for solders",
      //     type: "Logo Design",
      //     amount: "250",
      //     date: "20/10/2020",
      //     designer: "Rahul Bhat",
      //     date_of_delivery: "25/10/2020",
      //     special_info: "Logo should be in Embrodary, so don`t use gradient feel"
      //   },
      //   {
      //     name: "Aero Banner",
      //     description: "Aero is brand factory of fency clothes",
      //     type: "Logo Design",
      //     amount: "250",
      //     date: "20/10/2020",
      //     designer: "",
      //     date_of_delivery: "25/10/2020",
      //     special_info: "banner should be relevant with aero.io"
      //   }
      // ];
      


      const stored = localStorage.getItem('registerValue');
      const companyCodeVal = JSON.parse(stored);
      this.companyCode = companyCodeVal.companyName.split(' ')[0];

      this.createProjectForm = this.fb.group({
        pzProjectName: ['', Validators.required],
        pzProjectType: ['', Validators.required],
        pzProjectAllocatorName: [''],
        pzProjectDateOfDelivery: ['', Validators.required],
        pzProjectDesc: ['', Validators.required],
        pzProjectAmount: ['', Validators.required],
        pzProjectSplIns: ['', Validators.required]
      })
    }

  ngOnInit() {
    this.loginCheckFunc();    
  }


  /*
  * Description: If login or not login check
  */
  loginCheckFunc() {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/projects']);
      

    }
    
    // this.projectsWithDesigner = this.projects.filter((name) => {
    //   return name.designer !== '';
    // });    
  }

  /*
  * Description: If login or not login check
  */
  ngDoCheck() {
    this.editBoardFlag = this.genService.getFlagOn();
    console.log(this.editBoardFlag);
  }

  /*
  * Description: Created project function
  */
  createProjectFormValue() {
    const projectNew = {
      projectName: this.createProjectForm.value.pzProjectName,
      projectType: this.createProjectForm.value.pzProjectType,
      projectDescription: this.createProjectForm.value.pzProjectDesc,
      projectDeliveryDate: this.createProjectForm.value.pzProjectDateOfDelivery,
      projectValue: this.createProjectForm.value.pzProjectAmount,
      user: this.companyCode,
      projecCreatetDate: sessionStorage.getItem('toDaysDate'),
      paidAmount: '',
      balanceAmount: '',
      designer: this.createProjectForm.value.pzProjectAllocatorName || 'nil',
      projectRunningStatus: false,
      paymentId: Math.floor(Math.random() * 10000)
    }
    
    console.log(projectNew);    
    this.fbservice.postNewProject(projectNew).subscribe((data)=> {
      console.log('SERVICE==', data);
    }, (error) => {
      console.log('SERVICE ERROR==', error);
    });
    this.createProjectForm.reset();
    // location.reload();
  }

}

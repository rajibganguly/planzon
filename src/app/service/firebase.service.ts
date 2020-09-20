import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userFullName = localStorage.getItem('fullName');

  // FIREBASE DATABASE
  projects = environment.firebaseConfig.databaseURL + '/projects';
  designers = environment.firebaseConfig.databaseURL + '/designers';
  payments = environment.firebaseConfig.databaseURL + '/payments';
  amounts = environment.firebaseConfig.databaseURL + '/amount';

  constructor(private http: HttpClient) { }

  // GET ALL PROJECTS ================================================================================
  getAllProjects() {    
    return this.http.get<any>(this.projects + '.json').pipe(
      map(xresponseData=> {
      const postsArr = [];
      const newPostArr = [];
      for (const key in xresponseData) {
      postsArr.push({...xresponseData[key], id: key});
      }
      postsArr.filter((filterId) => {
        if(filterId.fullname == this.userFullName) {          
          newPostArr.push(filterId);
          return newPostArr;
        }        
      })
      return newPostArr;
      })
    );
  }


  // GET ALL DESIGNERS ================================================================================
  getAllDesigners() {
    return this.http.get<any>(this.designers + '.json').pipe(
      map(xresponseData=> {
      const postsArr = [];
      const newPostArr = [];
      for (const key in xresponseData) {
      postsArr.push({...xresponseData[key], id: key});
         }
      postsArr.filter((filterId) => {
        if(filterId.fullname == this.userFullName) {          
          newPostArr.push(filterId);
          return newPostArr;
        } else return false;       
      })
      return newPostArr;
      })
    );
  }

  // GET PROJECT RELATED TO ID ========================================================================
  getProjectRelatesToDesigner(type: string) {
    const postsArr = [];
    const newPostArr = [];
    return this.http.get<any>(this.projects + '.json').pipe(
      
      map(xresponseData=> {      
      for (const key in xresponseData) {
      postsArr.push({...xresponseData[key], id: key});
         }
      postsArr.filter((filterid)=> {
        if(filterid['designer'] === type && filterid['fullname'] == this.userFullName) {          
          newPostArr.push(filterid);
          return newPostArr;
        }        
      })
      return newPostArr;      
      })

    );
  }

  // ADD NEW DESIGNER ==================================================================================
  registerNewDesigners(data: object) {
    // data['fullname'] = this.userDetailsObj.fullname;
    return this.http.post<any>(this.designers + '.json', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',        
      })
    }).subscribe(
      (data)=> console.log(data), 
      (error) => console.log(error)
      );
  }

    // PAYMENTS TO DESIGNER/S ==========================================================================
    putPaymentsAll(obj: any) {

      console.log(obj);
      return this.http.put(`${this.designers}/${obj.id}`, obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'        
        })
      }).subscribe(
        (success) => console.log(success),
        (error) => console.log(error)
      );
    }


    // POST A NEW PROJECT =============================================================================
  postNewProject(data: object) {
    // data['fullname'] = this.userFullName;
    return this.http.post<any>(this.projects + '.json', data).subscribe((data)=> {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }


}

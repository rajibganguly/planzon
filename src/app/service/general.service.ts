import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


const headers= new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .set('Access-Control-Request-Headers', '**')
  .set('Authorisation', 'Basic a2lkX0hKYzJwS05VZDpkY2VmYzJlODRiODg0MzY0YmY2Y2MwMDU5ODIwYTAyYg==');


@Injectable({
  providedIn: 'root'
})


export class GeneralService {
  cardsData = 'cards.json';
  path = './../assets/data/';

  searchWithTopic$ = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  getAllMedia() {
    return this.http.get(this.path + this.cardsData);
  }

  getOneMedia(id) {
    const nameConventions = `MED${id}.json`;
    return this.http.get(this.path + nameConventions);
  }
  

}

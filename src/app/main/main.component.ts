import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../service/general.service';

import { ICards } from './card';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})




export class MainComponent implements OnInit {
  gennre;
  cards;
  constructor(
    private service: GeneralService,
    private router: Router
    ) {}

  ngOnInit() { 

    this.service.getAllMedia().subscribe((res) =>{
      this.service.searchWithTopic$.subscribe((topic) => {
        this.gennre = topic;
      })
      this.cards = res; 
      //console.log('cards', this.cards);
    })
    
  }

  public getToMedias(card: ICards) {
    this.router.navigate(['media/', card.uniqId])
  }

}

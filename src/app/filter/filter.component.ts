import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterPop: boolean = false;
  filterPopAuthor: boolean = false;
  listsOfGen;
  listsOfAuthor;
  favTopic: string;
  favAuthor: string;
  authors = ["Rajib Ganguly", "Tapas Raju", "Sagar Patil", "Ranjan Singh"];
  obj = { 
    genere: {
      genere: {},
      author: {}
    }
};

  constructor(private service: GeneralService) { }

  ngOnInit() {
  }

  hideAll() {
    this.filterPop = false;
    this.filterPopAuthor = false;
  }

  showGennre($event) {
    if(this.filterPop) {
      this.filterPop = false;// only this
      this.filterPopAuthor = false; // all false
    } else {
      this.filterPop = true;// only this
      this.filterPopAuthor = false; // all false
    }
  }
  showAuthor($event) {
    //this.hideAll();
    if(this.filterPopAuthor) {
      this.filterPopAuthor = false;// only this
      this.filterPop = false; // all false
    } else {
      this.filterPopAuthor = true;// only this
      this.filterPop = false; // all false
    }
    console.log(this.filterPop, this.filterPopAuthor);
  } 

  addGenrre() {
    console.log(this.favTopic);
    this.listsOfGen = this.favTopic;
    this.obj.genere.genere = this.listsOfGen;
    this.service.searchWithTopic$.next(this.obj);
    this.filterPop = false;
  }

  addAuthor() {
    console.log(this.authors);
    this.listsOfAuthor = this.favAuthor;
    this.obj.genere.author = this.listsOfAuthor;
    this.service.searchWithTopic$.next(this.obj);
    this.filterPopAuthor = false;
  }

}

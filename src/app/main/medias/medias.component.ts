import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../service/general.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {
  medias;
  constructor(
    private router: Router,
    private service: GeneralService
  ) { }

  ngOnInit() {
    this.reloadWorks();
  }

  reloadWorks() {
    let gennre;
    const param = this.router.routerState.snapshot.url;
    const id = (param.split('/'))[2];
    console.log(id);
    this.service.getOneMedia(id).subscribe((res) =>{
      

      this.medias = res; 
      console.log(this.medias)
    })
  }

  getToMedias(c) {
    console.log('onCLiecked-', c);
  }

}

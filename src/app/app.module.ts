import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';;

//SERVICES
import { GeneralService } from './service/general.service';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainComponent } from './main/main.component';

import { KinveyModule } from 'kinvey-angular-sdk';
import { MediasComponent } from './main/medias/medias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MATERIAL
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { FiltersPipe } from './filters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MediasComponent,
    FilterComponent,
    FiltersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    KinveyModule.init({
      appKey: 'kid_HJc2pKNUd',
      appSecret: 'f255e8e595f24afa99f0e73371615a70',
      instanceId: 'kvy-us2'
    }),
    BrowserAnimationsModule
  ],
  providers: [GeneralService ],
  bootstrap: [AppComponent]
})
export class AppModule { }



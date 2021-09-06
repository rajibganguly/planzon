import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MediasComponent } from './main/medias/medias.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'media/:id', component: MediasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

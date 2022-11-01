import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletimComponent } from './components/views/boletim/boletim.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"boletim/notas-e-faltas",
    component:BoletimComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NotasFaltasComponent } from './components/views/boletim/notas-faltas/notas-faltas.component';
import { FrequenciaComponent } from './components/views/frequencia/frequencia.component';
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
    path:"boletim",
    component:BoletimComponent
  },
  {
    path:"frequencia",
    component:FrequenciaComponent
  },
  {
    path:"boletim/notas-e-faltas",
    component:NotasFaltasComponent,
    outlet: "boletins"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RendimentoComponent } from './components/views/rendimento/rendimento.component';
import { UltimasNotasComponent } from './components/views/boletim/ultimas-notas/ultimas-notas.component';
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
    component:BoletimComponent,
    children:[
      {
        path:"notas-faltas",
        component:NotasFaltasComponent
      },
      {
        path:"ultimas-notas",
        component:UltimasNotasComponent
      }
    ]
  },
  {
    path:"frequencia",
    component:FrequenciaComponent
  },{
    path:"rendimento",
    component:RendimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

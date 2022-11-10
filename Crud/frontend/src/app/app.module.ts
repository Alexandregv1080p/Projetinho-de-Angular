import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentosComponent } from './components/views/Cadastros/documentos/documentos.component';
import { FrequenciaComponent } from './components/views/Avaliação/frequencia/frequencia.component';
import { RendimentoComponent } from './components/views/Avaliação/rendimento/rendimento.component';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component'
import {MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { BoletimComponent } from './components/views/boletim/boletim.component';

import {MatRadioModule} from '@angular/material/radio';
import { NotasFaltasComponent } from './components/views/boletim/notas-faltas/notas-faltas.component';
import { UltimasNotasComponent } from './components/views/boletim/ultimas-notas/ultimas-notas.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DiarioDeClasseComponent } from './components/views/diciplina/diario-de-classe/diario-de-classe.component'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    BoletimComponent,
    FrequenciaComponent,
    NotasFaltasComponent,
    UltimasNotasComponent,
    RendimentoComponent,
    TabelaComponent,
    DiarioDeClasseComponent,
    DocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

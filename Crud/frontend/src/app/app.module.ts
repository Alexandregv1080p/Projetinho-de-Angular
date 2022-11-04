import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component'
import {MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { BoletimComponent } from './components/views/boletim/boletim.component';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { FrequenciaComponent } from './components/views/frequencia/frequencia.component';
import { NotasFaltasComponent } from './components/views/boletim/notas-faltas/notas-faltas.component';
import { UltimasNotasComponent } from './components/views/boletim/ultimas-notas/ultimas-notas.component';
import { RendimentoComponent } from './components/views/rendimento/rendimento.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DocumentosComponent } from './components/views/documentos/documentos.component';
import { DiarioDeClasseComponent } from './components/views/diciplina/diario-de-classe/diario-de-classe.component'
import {MatCheckboxModule} from '@angular/material/checkbox'

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
    DocumentosComponent,
    DiarioDeClasseComponent
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

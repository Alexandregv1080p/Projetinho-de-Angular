import { TabelaDataSource } from './../../tabela/tabela-datasource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = ['documento', 'obg',"bmatricula","aceito","motivo","data","envio","download",];

}

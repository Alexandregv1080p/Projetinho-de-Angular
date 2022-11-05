import { TabelaDataSource, TabelaItem } from './../../../tabela/tabela-datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<TabelaItem>
  
  dataSource: TabelaDataSource;
  constructor() {
    this.dataSource = new TabelaDataSource();
  }
  ngOnInit(): void {
    this.table.dataSource = this.dataSource
  }
  displayedColumns = ['documento', 'obg',"bmatricula","aceito","motivo","data","envio","download",];

}

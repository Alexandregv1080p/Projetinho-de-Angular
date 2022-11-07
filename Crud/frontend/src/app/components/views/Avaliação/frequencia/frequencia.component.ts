import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  disciplina: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {disciplina: "Arquitetura de computadores"}
];

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.css']
})
export class FrequenciaComponent implements OnInit {
  displayedColumns: string[] = ['disciplina'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  constructor() { }

  ngOnInit(): void {
  }
 
  

}

import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  situation:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "RG", name: '', weight:"25-10-2022", symbol: 'H',situation:""},
  {position: "2 Fotos 3X4", name: '', weight: "25-10-2022", symbol: 'He',situation:""},
  {position: "Fotocópia do Histórico", name: '', weight:"25-10-2022", symbol: 'Li',situation:""},
  {position: "Fotocópia Conclusão Ensino Médio", name: '', weight: "25-10-2022", symbol: 'Be',situation:""},
  {position: "Documento de Identidade", name: '', weight: "31-10-2022", symbol: 'B',situation:""},
  {position: "CPF", name: '', weight: "30-10-2022", symbol: 'C',situation:""},
  {position: "Títutlo de Eleitor", name: '', weight: "30-10-2022", symbol: 'N',situation:""},
  {position: "Comprovante de votação", name: '', weight: "30-10-2022", symbol: 'O',situation:""},
  {position: "Certificado Militar", name: '', weight: "31-10-2022", symbol: 'F',situation:''},
  {position: "Certidão de Nascimento", name: '', weight: "30-10-2022", symbol: 'Ne',situation:""},
];
@Component({
  selector: 'app-documentos',
  templateUrl: '/documentos.component.html',
  styleUrls: ['/documentos.component.css']
})
export class DocumentosComponent {
  displayedColumns: string[] = [ 'position','select','select2','name', 'weight', 'symbol','situation'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  
}

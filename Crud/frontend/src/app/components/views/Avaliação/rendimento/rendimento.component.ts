import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendimento',
  templateUrl: './rendimento.component.html',
  styleUrls: ['./rendimento.component.css']
})
export class RendimentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saleData = [
    { name: "Arquitetura de Computadores", value: 5 },
    { name: "Desenvolvimento Web", value: 7 },
    { name: "Cálculo 1", value: 6 },
    { name: "Atividade de Extensão", value: 10 },
    { name: "Fridge", value: 4 }
  ];
}

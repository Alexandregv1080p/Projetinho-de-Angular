import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }
  goToNotas(){
    this.router.navigate(["boletim/notas-faltas"])
  }

}

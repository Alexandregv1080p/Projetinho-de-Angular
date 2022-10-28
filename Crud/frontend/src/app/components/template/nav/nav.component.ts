import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  isMenuOpened:boolean = false;
  isMenuOpened2:boolean = false;
  isMenuOpened3:boolean = false;
  isMenuOpened4:boolean = false;

  ngOnInit(): void {
  }
  toggleMenu():void {
    this.isMenuOpened = !this.isMenuOpened
  }
  toggleMenu2():void {
    this.isMenuOpened2 = !this.isMenuOpened2
  }
  toggleMenu3():void {
    this.isMenuOpened3 = !this.isMenuOpened3
  }
  toggleMenu4():void {
    this.isMenuOpened4 = !this.isMenuOpened4
  }
}

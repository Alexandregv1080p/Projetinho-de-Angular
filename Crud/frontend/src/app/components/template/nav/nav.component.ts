import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  
  dropdown : any = document.getElementsByClassName('.dropdown')

  alteraArrow(){
    this.dropdown.classList.toggle('active')
  }


  isMenuOpened:boolean = false;
  isMenuOpened2:boolean = false;
  isMenuOpened3:boolean = false;
  isMenuOpened4:boolean = false;
  isMenuOpened5:boolean = false;
  isMenuOpened6:boolean = false;
  isMenuOpened7:boolean = false;

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
  toggleMenu5():void {
    this.isMenuOpened5 = !this.isMenuOpened5
  }
  toggleMenu6():void {
    this.isMenuOpened6 = !this.isMenuOpened6
  }
  toggleMenu7():void {
    this.isMenuOpened7 = !this.isMenuOpened7
  }
 
}

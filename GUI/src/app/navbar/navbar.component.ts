import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar,ngbd-dropdown-basic',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  result:boolean;
  user="shipper";
  //name="Nilesh";
  
  isloggedin(){
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrier-myorders',
  templateUrl: './carrier-myorders.component.html',
  styleUrls: ['./carrier-myorders.component.css']
})
export class CarrierMyordersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  refresh(): void {
    setTimeout((data:any)=>{
      window.location.reload();
    },2000);
    
}
  
  
 



  

}

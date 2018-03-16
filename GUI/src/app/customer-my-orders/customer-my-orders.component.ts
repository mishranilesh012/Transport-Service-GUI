import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-my-orders',
  templateUrl: './customer-my-orders.component.html',
  styleUrls: ['./customer-my-orders.component.css']
})
export class CustomerMyOrdersComponent implements OnInit {
  
  posts:any[];
  new:any[];
  vari:any;
  dekh:any;


  constructor(http: Http,private modalService: NgbModal) {
    
    http.get('http://jsonplaceholder.typicode.com/posts').subscribe(response => {
     this.posts = response.json()
    //console.log(this.posts)
    });
   }


   check(event){
    this.vari=event.target.name;
    this.dekh=event.target.id;
    console.log(this.vari);
    console.log(this.dekh);
    
   }
  ngOnInit() {
  }
}

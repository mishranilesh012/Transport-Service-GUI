import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-customer-my-orders',
  templateUrl: './customer-my-orders.component.html',
  styleUrls: ['./customer-my-orders.component.css']
})
export class CustomerMyOrdersComponent implements OnInit {
  
  posts:any[];


  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/users').subscribe(response => {
     this.posts = response.json()
    //console.log(this.posts)
    });
   }

  ngOnInit() {
  }
}

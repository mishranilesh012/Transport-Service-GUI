import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-carrier-dashboard',
  templateUrl: './carrier-dashboard.component.html',
  styleUrls: ['./carrier-dashboard.component.css']
})
export class CarrierDashboardComponent implements OnInit {

  posts:any[];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/users').subscribe(resp => {
    console.log(resp.json())
    this.posts = resp.json()
    });
   }

  ngOnInit() {
  }


}

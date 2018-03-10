import { Component, OnInit } from '@angular/core';
//import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-customer-placeorders,ngbd-datepicker-popup',
  templateUrl: './customer-placeorders.component.html',
  styleUrls: ['./customer-placeorders.component.css']
})
export class CustomerPlaceordersComponent implements OnInit {

 model;

  constructor() { }

  ngOnInit() {
  }

}

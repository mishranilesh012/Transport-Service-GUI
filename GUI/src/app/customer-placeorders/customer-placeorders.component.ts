import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-customer-placeorders,ngbd-datepicker-basic',
  templateUrl: './customer-placeorders.component.html',
  styleUrls: ['./customer-placeorders.component.css']
})
export class CustomerPlaceordersComponent implements OnInit {

  model1: NgbDateStruct;
  date1: {year: number, month: number};

  selectToday1() {
    this.model1 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  model2: NgbDateStruct;
  date2: {year: number, month: number};

  selectToday2() {
    this.model2 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  type:string;
  constructor() { }

  ngOnInit() {
  }

  selectType(event){
    this.type = event.target.id;
    console.log(this.type);
  }
}

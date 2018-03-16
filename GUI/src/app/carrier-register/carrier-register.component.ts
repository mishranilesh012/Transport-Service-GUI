import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carrier-register',
  templateUrl: './carrier-register.component.html',
  styleUrls: ['./carrier-register.component.css']
})
export class CarrierRegisterComponent implements OnInit {

  image:any;
  imgdata:any;

  constructor(private http:HttpClient) { }

  onSubmit(){
    this.imgdata=this.getBase64();
    console.log(this.imgdata);
  }

  ngOnInit() {
  }
  
handleFileSelect(evt){
  var files = evt.target.files;
  var file = files[0];

if (files && file) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
}
}

_handleReaderLoaded(readerEvt) {
 var binaryString = readerEvt.target.result;
        this.image= btoa(binaryString);
        //console.log(atob(this.image));    
}

getBase64(){
  return this.image;
}






}

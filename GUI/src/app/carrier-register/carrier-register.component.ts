import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carrier-register',
  templateUrl: './carrier-register.component.html',
  styleUrls: ['./carrier-register.component.css']
})
export class CarrierRegisterComponent implements OnInit {

  selectedFile:File = null;
  image:any;


  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  // fileEvent(event){
  //   //this.selectedFile = <File>event.target.files[0];
  //   console.log(event.target.files);
  // }
  
  changeListener($event) : void {
    this.readThis($event.target);
    
  }
  
  readThis(inputValue: any): void {
    let file:File = inputValue.files[0];
    let myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
    console.log(myReader);
  }

  // onSubmit(){

  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   console.log(fd);
  //   this.http.post('http://jsonplaceholder.typicode.com/posts',fd).subscribe(res => {
  //     console.log(res);
  //   });
  // }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';


@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.css']
})
export class HelpSupportComponent implements OnInit {

  currentJustify="fill";
  message:string;

  constructor(private authService:AuthService) {
    
   }
  ngOnInit() {
    
  }

}

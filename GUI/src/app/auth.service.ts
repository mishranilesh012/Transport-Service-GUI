import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  constructor(private http:Http) { }

  fetch(res){
    return this.http.get('http://localhost:3000/carrier/register')
    .subscribe(res => res.json());
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}

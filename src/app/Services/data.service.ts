import { Injectable } from '@angular/core';
/* eslint-disable no-mixed-spaces-and-tabs */
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = '/assets/Data/Data.json'
  constructor(private http: HttpClient ) { }
   getData = () => {
     const url = 'assets/Data/Data.json';
     return this.http.get(url);
     
   }
}

import { Injectable } from '@angular/core';
/* eslint-disable no-mixed-spaces-and-tabs */
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class DataService {

  public url = '/assets/Data/Data.json'
  constructor(private http: HttpClient ) { }
   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
   getData = () => {
       const url = 'assets/Data/Data.json';
       return this.http.get(url);
     
   }
}

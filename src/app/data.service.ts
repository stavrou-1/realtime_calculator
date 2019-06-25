import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string = "https://calc-angular.firebaseio.com/.json";
  constructor(private http: HttpClient) {

  }

  fetchCalcs() {
    return this.http.get(this.url)
   
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }
   url = 'http://localhost:4000';
  	getColors() {
    return this
            .http
            .get(`${this.url}/colorsArray`);
        };
        
}

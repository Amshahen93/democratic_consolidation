import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendDataToBackend(data) {
    return this.http.post('http://dci.am/api', data);
  }
}

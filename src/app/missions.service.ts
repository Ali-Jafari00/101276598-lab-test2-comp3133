import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://api.spacexdata.com/v3/launches"
    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseFarmer } from '../model/farmer.model';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getFarmers(): Observable <ResponseFarmer> {
    return this.http.get<ResponseFarmer>(this.url);
  }
  
}

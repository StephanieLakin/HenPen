import { Injectable } from '@angular/core';
import { Hen } from '../models/hen';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HensService {
  private url = 'Hen';
  private API_URL= environment.apiUrl;
  constructor(private http: HttpClient) { } 

  public getHens(): Observable<Hen[]> {
    return this.http.get<Hen[]>(`${this.API_URL}/${this.url}`);
  }
}
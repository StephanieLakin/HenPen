import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChickenBreedsService {
  private url = 'chicken-breeds';
  private API_URL= environment.apiUrl;
  constructor(private http: HttpClient) { }

  getBreeds(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${this.url}`);
  }
}

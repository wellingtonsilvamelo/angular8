import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private resourceUrl = 'http://localhost:3000/tesauro'

  constructor(private http: HttpClient) { }

  search(req?: any): Observable<any> {
    return this.http.get<any[]>(`${this.resourceUrl}?dsThesauro_like=${req}`,  { observe: 'response' });
  }
}

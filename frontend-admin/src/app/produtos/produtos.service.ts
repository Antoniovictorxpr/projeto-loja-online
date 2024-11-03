import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  getProdutos():Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}

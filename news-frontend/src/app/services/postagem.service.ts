import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postagem } from '../models/postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  private apiUrl = 'http://localhost:3000/postagens';

  constructor(private http: HttpClient) { }

  listar(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(this.apiUrl);
  }

  cadastrar(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(this.apiUrl, postagem);
  }
}

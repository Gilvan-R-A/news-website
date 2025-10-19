import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Postagem } from '../models/postagem';


@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  private apiUrl = `${environment.apiUrl}/postagens`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Postagem[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(postagens => postagens.map(p => ({
        id: p.idPostagem,
        titulo: p.tituloPostagem,
        conteudo: p.conteudoPostagem,
        categoria: p.categoriaPostagem,
        data: p.dataPostagem
      })))
    );
  }

  cadastrar(postagem: Postagem): Observable<Postagem> {
    const payload = {
      tituloPostagem: postagem.titulo,
      conteudoPostagem: postagem.conteudo,
      categoriaPostagem: postagem.categoria,
      dataPostagem: postagem.data
    }
    return this.http.post<Postagem>(this.apiUrl, payload);
  }

  editar(id: number, postagem: Postagem): Observable<Postagem> {
    const payload = {
      tituloPostagem: postagem.titulo,
      conteudoPostagem: postagem.conteudo,
      categoriaPostagem: postagem.categoria,
      dataPostagem: postagem.data
    };
    return this.http.put<Postagem>(`${this.apiUrl}/${id}`, payload);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }












}

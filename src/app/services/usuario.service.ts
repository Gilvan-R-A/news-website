import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      `${this.apiUrl}?email=${email}&senha=${senha}`
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  salvarUsuarioLogado(usuario: Usuario): void {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
  }

  obterUsuarioLogado(): Usuario | null {
    const usuario = localStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
  }

  logout(): void {
    localStorage.removeItem('usuarioLogado');
  }

  estaAutenticado(): boolean {
    return !!this.obterUsuarioLogado();
  }
}

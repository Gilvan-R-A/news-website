import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/usuarios';

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

import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
  usuario: Usuario = { email: '', senha: ''};

  constructor(private usuarioService: UsuarioService) {}

  cadastrar() {
    this.usuarioService.cadastrar(this.usuario).subscribe({
      next: () => alert('Usuário cadastrado com sucesso!'),
      error: (err) => console.error(err)
    });
  }
}

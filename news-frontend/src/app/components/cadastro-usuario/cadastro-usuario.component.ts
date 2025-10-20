import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
  usuario: Usuario = { emailUsuario: '', senhaUsuario: ''};

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router
  ) {}

  cadastrar() {
    this.usuarioService.cadastrar(this.usuario).subscribe({
      next: () => {
        alert('Usuário cadastrado com sucesso!');
        this.usuario = { emailUsuario: '', senhaUsuario: ''};
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar usuário',err);
        alert('Falha ao cadastrar usuário. Verifique os dados e tente novamente');
      }
    });
  }
}

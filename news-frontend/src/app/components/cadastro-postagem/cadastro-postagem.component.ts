import { Component } from '@angular/core';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/postagem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cadastro-postagem',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './cadastro-postagem.component.html',
  styleUrl: './cadastro-postagem.component.scss'
})
export class CadastroPostagemComponent {
  postagem: Postagem = { titulo: '', conteudo: '', categoria: '', data: new Date().toISOString()};

  constructor(private postagemService: PostagemService) {}

  cadastrar() {
    this.postagemService.cadastrar(this.postagem).subscribe({
      next: () => {
        alert('Postagem cadastrada com sucesso!');

        this.postagem = {
          titulo: '',
          conteudo: '',
          categoria: '',
          data: new Date().toISOString()
        }
      } ,
      error: (err) => console.error(err),
    });
  }
}

import { Component } from '@angular/core';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/postagem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-postagem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-postagem.component.html',
  styleUrl: './cadastro-postagem.component.scss'
})
export class CadastroPostagemComponent {
  postagem: Postagem = { titulo: '', conteudo: '', categoria: '', data: new Date().toISOString()};

  constructor(private postagemService: PostagemService) {}

  cadastrar() {
    this.postagemService.cadastrar(this.postagem).subscribe({
      next: () => alert('Postagem cadastrada com sucesso!'),
      error: (err) => console.error(err),
    });
  }
}

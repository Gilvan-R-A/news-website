import { Component } from '@angular/core';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/postagem';

@Component({
  selector: 'app-cadastro-postagem',
  imports: [],
  templateUrl: './cadastro-postagem.component.html',
  styleUrl: './cadastro-postagem.component.scss'
})
export class CadastroPostagemComponent {
  postagem: Postagem = { titulo: '', conteudo: '', categoria: '', data: ''};

  constructor(private postagemService: PostagemService) {}

  cadastrar() {
    this.postagemService.cadastrar(this.postagem).subscribe({
      next: () => alert('Postegem cadastrada com sucesso!'),
      error: (err) => console.error(err),
    });
  }
}

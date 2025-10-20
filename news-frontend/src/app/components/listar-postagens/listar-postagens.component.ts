import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/postagem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-postagens',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-postagens.component.html',
  styleUrl: './listar-postagens.component.scss'
})
export class ListarPostagensComponent implements OnInit {
  postagens: Postagem[] = [];
  editando: Postagem | null = null;

  constructor(private postagemService: PostagemService) {}

  ngOnInit(): void {
      this.carregarPostagens();
  }

  carregarPostagens() {
    this.postagemService.listar().subscribe({
      next: (dados) => this.postagens = dados,
      error: (err) => console.error(err)
    });
  }

  editarPostagem(postagem: Postagem) {
    this.editando = {...postagem};
  }

  salvarEdicao() {
    if (this.editando && this.editando.id) {
      this.postagemService.editar(this.editando.id, this.editando).subscribe({
        next: () => {
          alert('Postagem atualizada com sucesso!');
          this.editando = null;
          this.carregarPostagens();
        },
        error: (err) => console.error(err)
      });
    }
  }

  cancelarEdicao() {
    this.editando = null;
  }

  excluirPostagem(id: number | undefined) {
    if (id && confirm('Tem certeza que deseja excluir esta postagem?')) {
      this.postagemService.excluir(id).subscribe({
        next: () => {
          alert('Postagem excluída com sucesso!');
          this.carregarPostagens();
        },
        error: (err) => console.error(err)
      });
    }
  }
}

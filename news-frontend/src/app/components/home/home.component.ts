import { Component } from '@angular/core';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/postagem';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  postagens: Postagem[] = [];

  constructor(private postagemService: PostagemService) {}

  ngOnInit() {
    this.postagemService.listar().subscribe({
      next: (dados) => this.postagens = dados,
      error: (err) => console.error(err)
    });
  }

}

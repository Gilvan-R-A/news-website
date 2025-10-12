import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/postagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  postagens: Postagem[] = [];

  constructor(private postagemService: PostagemService) {}

  ngOnInit() {
    this.postagemService.listar().subscribe({
      next: (dados) => {
        this.postagens = dados;
      },
      error: (erro) => { 
        console.error('Erro ao buscar postagens:', erro);
      }
    });
  }

}

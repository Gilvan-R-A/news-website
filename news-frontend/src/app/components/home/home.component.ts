import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PostagemService } from '../../services/postagem.service';


import { Postagem } from '../../models/postagem';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  postagens: Postagem[] = [];

  constructor(
    private authService: AuthService,
    private postagemService: PostagemService
  ) {}

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

  logout():void {
    this.authService.logout();
    window.location.href = '/login';  
  }

}

import { Component } from '@angular/core';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/postagem';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-cadastro-postagem',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  providers: [DatePipe],
  templateUrl: './cadastro-postagem.component.html',
  styleUrl: './cadastro-postagem.component.scss'
})
export class CadastroPostagemComponent {
  postagem: Postagem = { titulo: '', conteudo: '', categoria: '', data: new Date().toISOString()};

  constructor(
    private postagemService: PostagemService, 
    private datePipe: DatePipe
  ) {}

  cadastrar() {
    const dataFormatada = this.datePipe.transform(new Date(), 'dd/MM/yyyy') || '';

    const postagemComDataFormatada: Postagem = {
      ...this.postagem,
      data: dataFormatada
    };

    this.postagemService.cadastrar(postagemComDataFormatada).subscribe({
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

import Postagem from "../model/Postagem.js";
import PostagemService from "../services/PostagemService.js";

var postagemService = new PostagemService();
var linhaPostagem = document.getElementById("linhaPostagem");

postagemService.listar().then(resposta => {
    montarCards(resposta)
});


function montarCards(resposta) {
    resposta.forEach(postagem => {
        linhaPostagem.innerHTML += `<div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">${postagem.titulopostagem}</h5>
                                                <p class="card-text">${postagem.conteudopostagem}</p>
                                                <p class="card-text">${postagem.datapostagem}</p>
                                                <p class="card-text">${postagem.categoriapostagem}</p>
                                            </div>
                                        </div>
                                    </div>`;
    });

}


import Postagem from "../model/Postagem.js";
import PostagemService from "../services/PostagemService.js";

var tituloPostagem;
var conteudoPostagem;
var categoriaPostagem;
var postagem;

var postagemService = new PostagemService();

tituloPostagem = document.getElementById("tituloPostagem");
conteudoPostagem = document.getElementById("conteudoPostagem");
categoriaPostagem = document.getElementById("categoriaPostagem");

document.getElementById("btnCadastrar").addEventListener("click", cadastrar);



function cadastrar() {
    if (validarCampos()) {

        postagem = new Postagem(null, tituloPostagem.value, conteudoPostagem.value, categoriaPostagem.value);
        postagemService.cadastrar(postagem).then(resposta => {
            if (resposta != null) {
                alert('Postagem cadastrada com sucesso!!');
                limparCampos();
            } else {
                alert('Erro ao cadastrar uma postagem!!');
            }
        });

    } else {
        alert('Digite os campos corretamente');
    }
}

function validarCampos() {
    if (tituloPostagem.value != '' && conteudoPostagem.value != '' && categoriaPostagem.value != '') {
        return true;
    } else {
        return false;
    }
}

function limparCampos() {
    tituloPostagem.value = '';
    conteudoPostagem.value = ''; 
    categoriaPostagem.value = '';
}
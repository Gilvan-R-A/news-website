export default class Postagem{
    constructor(idPostagem, tituloPostagem, conteudoPostagem, categoriaPostagem){
        this.idPostagem = idPostagem;
        this.tituloPostagem = tituloPostagem;
        this.conteudoPostagem = conteudoPostagem;
        this.categoriaPostagem = categoriaPostagem;
        this.dataPostagem = new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear();
    }
}
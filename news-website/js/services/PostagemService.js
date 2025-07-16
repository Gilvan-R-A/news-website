export default class PostagemService{

    async listar(){
        try {
            let resposta = await fetch('https://news-api-u1bc.onrender.com/postagem');
            return resposta.json();
        } catch (error) {
            console.log(error);
        }
    }

    async listarPorId(idPostagem){

    } 

    async cadastrar(postagem){
        try {
            let resposta = await fetch('https://news-api-u1bc.onrender.com/postagem', {
                method: 'post',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postagem)
            });
            console.log(resposta);
            return (resposta.status == 201) ? resposta.json() : null;
        } catch (error) {
            console.log(error);
        }
    }

    async alterar(postagem){

    }

    async excluir(idPostagem){

    }
    
}
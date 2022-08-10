export default class UsuarioService{

    async logar(usuario){
        try {
            var resposta = await fetch('http://localhost:3000/usuarioLogin', 
            {
                method: 'post',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body : JSON.stringify(usuario)
            });
            return (resposta.status == 200) ? true : false;
        } catch (error) {
            console.error(error);
        }
    }
    
    async cadastrar(usuario){
        try {
            
        } catch (error) {
            console.error(error);
        }
    }

}
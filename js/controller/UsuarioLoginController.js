import Usuario from "../model/Usuario.js";
import UsuarioService from "../services/UsuarioService.js";

var emailUsuario;
var senhaUsuario;

var usuarioService = new UsuarioService();

emailUsuario = document.getElementById("emailUsuario");
senhaUsuario = document.getElementById("senhaUsuario");

document.getElementById("botao").addEventListener("click", () => {
    login();
})

function login() {
    if (validarCampos()) {
        var usuario = new Usuario(null, emailUsuario.value, senhaUsuario.value)
        usuarioService.logar(usuario)
            .then((resposta) => {
                if (resposta) {
                    alert("Você conseguiu logar");
                    location.href = "index.html";
                } else {
                    alert("Login ou senha incorretos");
                }
            })
    } else {
        alert('Digite os campos corretamente');
    }
}

function validarCampos() {
    return (emailUsuario.value != '' && senhaUsuario.value != '');
}


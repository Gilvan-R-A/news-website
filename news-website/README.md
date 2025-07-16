<h1 align="center">
   Projeto de Cadastro de Notícias
</h1> 

Este projeto é um site de cadastro de notícias, onde os usuários podem se registrar, fazer login e cadastrar novas postagens de notícias com títulos, contéudo e categorias. A interface do usuário é responsiva, e a aplicação utiliza tecnologias como HTML, CSS, JavaScript e consumo de APIs para interações com o servidor.   

## Estrutura de Diretórios   

```   

news-website
│
├── css
│   ├── estilo.css
│   ├── global.css
│   └── login.css
│
├── js
│   ├── controller
│   │   ├── CadastroPostagemController.js
│   │   ├── PrincipalController.js
│   │   └── UsuarioLoginController.js
│   ├── model
│   │   ├── Postagem.js
│   │   └── Usuario.js
│   └── services
│       ├── PostagemService.js
│       └── UsuarioService.js
│
├── cadastro-noticia.html
├── cadastro-usuario.html
├── index.html
└── login.html   

```   

## Descrição dos Arquivos   

### Arquivos CSS   

- **estilo.css**: Contém o estilo principal do site, com design responsivo para diferentes tamanhos de tela.   
- **global.css**: Define fontes e inclui o estilo para bibliotecas externas (como o SweetAlert2).   
- **login.css**:  Especifica o estilo da página de login, incluindo o layout centralizado e estilização dos campos de entrada.   

### Arquivos JavaScript   

**Controllers**   

- **CadastroPostagemController.js**: Controla a lógica para cadastro de novas postagens, validando campos e interagindo com o serviço de postagens.   
- **PrincipalController.js**: Exibe as postagens cadastradas em formato de cartões dinâmicos na página principal.   
- **UsuarioLoginController.js**: Gerencia o processo de login de usuários, validando os dados e redirecionando para a página principal se o login for bem-sucedido.   

**Models**   

- **Postagem.js**: Define a estrutura de uma postagem, com propriedades como título, conteúdo, categoria e data.   
- **Usuario.js**: Define a estrutura de um usuário, com propriedades como ID, email e senha.   

**Services**   

- **PostagemService.js**: Contém métodos assíncronos para listar, cadastrar, alterar e excluir postagens no backend.   
- **UsuarioService.js**: Define o serviço responsável pelo login de usuários, validando suas credenciais.   


## Tecnologias Utilizadas   

- **HTML5**: Para a estruturação das páginas.
- **CSS3**: Para o estilo das páginas.
- **JavaScript**: Para a lógica do frontend e interações com o servidor.
- **Fetch API**: Para fazer requisições HTTP ao backend.   
- **SweetAlert2**: Para exibir alertas personalizados   

## Como Rodar o Projeto   

### 1. Clonando o Repositório  

```  

git clone https://github.com/Gilvan-R-A/news-website
cd news-website   

```  

### 2. Configurando o Backend   

Este projeto simula um backend usando o fetch para interagir com uma API local.   

### 3. Executando o Projeto   

Abra o arquivo index.html em seu navegador para visualizar a página principal. As interações com o formulário de cadastro e login estarão disponíveis para os usuários.   
Para que as funcionalidades de cadastro e login funcionem corretamente, o servidor de backend (API) deve estar rodando em **http://localhost:3000**. Você pode configurar a API utilizando qualquer backend, como Node.js.   

## Contribuições   

Contribuições são bem-vindas! Se você tem sugestões de melhorias ou correções fique à vontade para abrir um pull request.











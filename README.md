<h1 align="center">
    Projeto de Cadastro de Notícias
</h1>   

Aplicação **SPA desenvolvida em Angular** para gerenciamento e publicação de notícias.   
Versão totalmente atualizada, com autenticação, CRUD de postagens e design responsivo.   

## Tecnologias utilizadas   

- Angular 19.0.6
- TypeScript
- SCSS (CSS modularizado)
- Angular Router - navegação SPA   
- Autenticação JWT
- Componentização reutilizável 
- API Node.js/Express - integração com backend  

## Estrutura do projeto   

```   
/
├── docs/                 # Build gerado para o GitHub Pages
├── src/
│   ├── app/
│   │   ├── components/    # Componentes reutilizáveis (Navbar, Card, Form etc.)
│   │   ├── guards/        # Protege rotas que exigem autenticação (ex: AuthGuard)
│   │   ├── interceptors/  # Intercepta requisições HTTP (ex: adiciona token JWT)
│   │   ├── models/        # Modelos e interfaces TypeScript (User, Postagem etc.)
│   │   ├── services/      # Serviços de API, autenticação e manipulação de dados
│   │   └── app.module.ts  # Módulo principal da aplicação
│   ├── styles.scss        # Estilos globais da aplicação
│   └── main.ts            # Ponto de entrada do Angular
├── angular.json           # Configurações do projeto Angular
├── package.json           # Dependências e scripts npm
└── README.md              # Documentação do projeto

```   

## Como rodar o projeto localmente   

```  
# Clonar o repositório
git clone https://github.com/Gilvan-R-A/news-website

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
ng serve

# Acessar no navegador
http://localhost:4200
```   

## Autenticação   

O sistema utiliza autenticação JWT.   
O login é obrigatório para criar, editar ou excluir postagens.   

## Recursos   

- Cadastro e login de usuários   
- Criação, edição e exclusão de postagens   
- Interface responsiva e intuitiva   
- Navbar com menu dinâmico
- Deploy no GitHub Pages

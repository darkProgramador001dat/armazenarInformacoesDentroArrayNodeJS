// Projeto: Backend NodeJS Framework Express
// Data: 2025/10/29 às 05:29 AM.
// Author: darkProgramador001dat
// Como criar um servidor NodeJS que armazena informações dentro da Array como exemplo: username e password. 
// Não salva em memória.
//
// Depêndencias:
// npm init -y
// npm install express
//
// Sobre codigo:
// Importe as bibliotecas.
// Crie uma instancia do servidor e porta.
// Crie um Array vazio para armazenar os dados, username e password.
// Crie um Middleware para receber os dados do corpo da requisição em formato legível JSON.
// Crie uma rota GET, renderize a pagina register.html
// Crie uma rota POST.
// Extraia os dados vindo da requisição do usuario.
// Empurre-os para o Array.
// Inicie o servidor.
//
//
const express = require('express');    // Framework Express 5.1.0
const bodyParser = require('body-parser');    // Modulo do próprio express.

const app = express();  // Instancia do Servidor
const PORT = 3000;      // Porta

// armazenar informações de usuarios e senha. Não salva em memória.
let users = [];

app.use(bodyParser.urlencoded({ extended: true }));  // Pegar os dados que vêm de um formulario HTML. permite a analise de Objetos aninhados no corpo da requisição.
app.use(bodyParser.json());  // Permite que o express entenda dados no formato JSON(Javascript Object Notation).

// Rota principal
app.get('/', (request, response) => {
  response.statusCode = 200;                          // Codigo de Sucesso.
  response.setHeader('Content-Type','text/html');     // Cabeçalho do tipo HTML.
  response.sendFile(__dirname + '/register.html');    // Renderize o HTML que contém no diretorio atual.
});

// Rota para envio do formulario.
app.post('/register', (request, response) => {
  const { username, password } = request.body;    // Extraindo, contém os dados enviados pelo POST. body-parser já os converteu em formato legível.
  users.push({username, password});    // Empurrando para o Array.
  console.log('New register in Array: ', users);    // Visualizando...
  response.send('200!');  // Cliente..
});

// Servidor rodando no endereço.
app.listen(PORT, () => {
  console.clear();
  console.log('oOo...... Armazenar informacoes em Array com NodeJS ......oOo\n');
  console.log(`Servidor rodando http://127.0.0.1:${PORT}/`);
  console.log('Ctrl + c fechar servidor...\n');
});

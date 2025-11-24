const express = require('express');
const bodyParser = require('body-parser');    // Biblioteca para realizar parser de formularios.

const app = express();

// Utilizando o metodo, para receber o corpo da requisição, Sim.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [{ username: 'darkProgramador', password: '02040801' }];    // Criando um objeto com as credenciais

app.get('/', (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type','text/html');
  response.send(`
  <!doctype html>
  <html lang='en'>
    <head>
      <meta charset='utf-8'>
      <title>pageLogin</title>
    </head>
    <body>
      <h1>Hi, visitant!</h1>
      <hr>
      <form action='/login' method='post'>
        <label>USER:</label>
        <input type='text' name='username' required><br>
        <input type='password' name='password' required><br>
        <button type='submit'>login</button>
      </form>
    </body>
  </html>
  `);
});

// ROTA POST
app.post('/login', (request, response) => {
  const { username, password } = request.body;  // recebendo o corpo da requisição

  if(username === users[0].username && password === users[0].password)  // Realizando uma igualdade entre a requisição e o indice do objeto
  {
    response.status(200).send(`<h2>Login authorized 200!</h2>`);
  }else
  {
    response.status(401).send(`<h2>Login incorrect username or password</h2>`);
  }
});

const PORT = 5500;
app.listen(PORT, () => {
  console.clear();
  console.log(`oOo.... Server running ....oOo\nhttp://localhost:${PORT}/ Cancel server Ctrl + C\n\n`);
});

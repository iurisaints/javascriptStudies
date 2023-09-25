//variables
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');

//teste api
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

//pesquisando com ou sem ID
app.get('/users/:id?', (req, res) => {
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Users' + filter, res);
})

//deletando um usuário
app.delete('/users/:id', (req, res) =>{
    execSQLQuery('DELETE FROM Users WHERE ID=' + parseInt(req.params.id), res);
})

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

//usuário POST	
app.post('/users', (req, res) => {
    const Nome = req.body.nome;
    const CPF = req.body.cpf;
    const Cidade = req.body.cidade;
    const Celular = req.body.celular;
    const user = req.body.user;
    const password = req.body.password;
    execSQLQuery(`INSERT INTO Users (Nome, CPF, Cidade, Celular, user, password) VALUES ('${Nome}','${CPF}','${Cidade}','${Celular}','${user}','${password}')`, res);
});

//editar user
app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const nome = req.params.nome;
  const cpf = req.params.cpf;
  const Cidade = req.params.cidade;
  const Celular = req.params.celular;
  const user = req.params.user;
  const password = req.params.password; 
  execSQLQuery(`UPDATE Users SET Nome='${nome}', CPF='${cpf}', Cidade='${Cidade}', Celular='${Celular}', user='${user}', password='${password}' WHERE ID=${id}`, res);
})


//função para conectar o banco de dados
function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '',
    database : 'intedata'
  });

  connection.query(sqlQry, (error, results, fields) => {
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

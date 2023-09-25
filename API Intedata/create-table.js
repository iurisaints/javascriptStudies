const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'intedata'
});

connection.connect((err) => {
    if(err) return console.log(err);
    console.log('conectou!');
    createTable(connection);
    addRows(connection);
    function createTable(conn){
        const sql = `CREATE TABLE IF NOT EXISTS Users(
                     ID int NOT NULL AUTO_INCREMENT,
                     Nome varchar(150) NOT NULL,
                     CPF varchar(11) NOT NULL,
                     Cidade varchar(150) NOT NULL,
                     Celular varchar(15) NOT NULL,
                     user varchar(30) NOT NULL,
                     password varchar(30) NOT NULL,
                     PRIMARY KEY (ID)
                     );`;
        
        conn.query(sql, (error, results, fields) => {
            if(error) return console.log(error);
            console.log('criou a tabela!');
        });
    }
  })
  
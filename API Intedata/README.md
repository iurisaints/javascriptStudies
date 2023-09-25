# intedata
Integration Data: a app to integrate your data.

### Aplicação teste com Front-End e localStorage:
Se encontra na pasta 'teste-front' onde encontrará os arquivos necessários para rodar a aplicação teste. É apenas necessário ter uma forma de executar o HTML, caso esteja utilizando Visual Studio Code, apenas a extensão **Live Server** é o bastante.

Para seguirmos para a API, é necessário que tenha instalado o Node.js e o NPM na máquina.
É necessário iniciar o Node.js com ```npm init -y``` na pasta do projeto.
Agora, na pasta do projeto, terá de instalar o mysql2, é uma extensão que permite utilizar o Node com o MYSQL, você pode instalá-lo com o comando ```npm install mysql2```.
Também precisaremos instalar o Express na aplicação com ```npm install express```.

Caso tenha dificuldade em rodar o código, pode baixar os módulos do node neste link: https://drive.google.com/drive/folders/1nSeIiKDRtrlNfxTq_SDzDGAtTrFpgA3j?usp=share_link exportar e inserir na pasta raiz do projeto.

## API com banco de dados:

É necessário criar uma base de dados local. Após isso, existe um arquivo chamado **create-table.js** onde terá de modificar os parâmetros de conexão. Após isso, abra o terminal e digite ```node create-table.js``` e ele criará a tabela *Users* no seu banco de dados. Agora está pronto para testar as entradas e saídas do código. Para isso você terá que utilizar o aplicativo **Postman**. 


#### Para testes no Postman:
Digite no terminal ```node index.js``` e ele retornará que a API está funcionando. Após isso para testar a API, abra o Postman na opção POST, para iniciarmos a inserção de dados. Você digitará no URL: localhost:3000/users
e após isso fará como na imagem, para popular os dados no banco:
https://imgcloud.com.br/share/DyE2aWApJdwDS39T

Para testes em GET e digite localhost:3000/users (sendo 3000 a porta para conexão). Caso queira filtrar por ID, escreva o id após o users, como nesse exemplo: localhost:3000/users/1 (sendo 1 o ID alvo).

Para testes em DELETE é como no GET, você irá filtrar por ID qual deseja deletar, exemplo: localhost:3000/users/2 (sendo 2 o ID alvo).

Também é possível atualizar um cadastro, assim como no POST mas iremos utilizar o PATCH, na mesma estrutura do POST, como na imagem:
https://imgcloud.com.br/share/0DVLh7vQLjGWIFSJ

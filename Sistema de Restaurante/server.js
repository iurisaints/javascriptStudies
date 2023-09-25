const express = require('express');
const app = express();
const port = 5500;

app.use(express.static(__dirname + '/public'));
app.use(express.json()); // Adiciona o middleware para fazer o parsing do corpo da requisição como JSON

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/menu.html', (_req, res) => {
  res.sendFile(__dirname + '/menu.html');
});

app.get('/reservasTela.html', (_req, res) => {
  res.sendFile(__dirname + '/reservasTela.html');
});


app.post('/reservas.json', (req, res) => {
  const novaReserva = req.body;
  adicionarReservaNoArquivo(novaReserva);
  res.json({ message: 'Reserva adicionada com sucesso.' });
});

app.post('/adicionar-reserva', (req, res) => {
  const novaReserva = req.body;
  adicionarReservaNoArquivo(novaReserva);
  res.json({ message: 'Reserva adicionada com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});

function lerReservasDoArquivo() {
  // Implementação para ler as reservas do arquivo "reservas.json"
  // Retorne as reservas como um array de objetos JSON
  // Exemplo de implementação:
  const fs = require('fs');
  const reservas = JSON.parse(fs.readFileSync(__dirname + '/public/reservas.json', 'utf8'));
  return reservas;
}

function adicionarReservaNoArquivo(reserva) {
  // Implementação para adicionar a reserva ao arquivo "reservas.json"
  // Carregue as reservas existentes do arquivo, adicione a nova reserva e salve novamente
  // Exemplo de implementação:
  const fs = require('fs');
  const reservas = lerReservasDoArquivo();
  reservas.push(reserva);
  fs.writeFileSync(__dirname + '/public/reservas.json', JSON.stringify(reservas));
}

const express = require('express')
const server = express()
const dadosMedicamentos = require('./data/dadosMedicamentos.json'); // Novo arquivo para dados de medicamentos

const fs = require('fs')

// função para utilizar o servidor
server.use(express.json())

// Rotas para medicamentos
server.post('/medicamentos', (req, res) => {
    const novoMedicamento = req.body;

    if (!novoMedicamento.id || !novoMedicamento.nome || !novoMedicamento.preco || !novoMedicamento.quantidade) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente" });
    } else {
        dadosMedicamentos.Medicamento.push(novoMedicamento);
        salvarDadosMedicamentos(dadosMedicamentos);
        return res.status(201).json({ mensagem: "Novo medicamento cadastrado com sucesso!" });
    }
});

server.get('/medicamentos', (req, res) => {
    return res.json(dadosMedicamentos.Medicamento);
});

server.put('/medicamentos/:id', (req, res) => {
    const medicamentoId = parseInt(req.params.id);
    const atualizarMedicamento = req.body;
    const idMedicamento = dadosMedicamentos.Medicamento.findIndex(m => m.id === medicamentoId);

    if (idMedicamento === -1) {
        return res.status(404).json({ mensagem: "Medicamento não encontrado :/" });
    } else {
        dadosMedicamentos.Medicamento[idMedicamento].nome = atualizarMedicamento.nome || dadosMedicamentos.Medicamento[idMedicamento].nome;
        dadosMedicamentos.Medicamento[idMedicamento].preco = atualizarMedicamento.preco || dadosMedicamentos.Medicamento[idMedicamento].preco;
        dadosMedicamentos.Medicamento[idMedicamento].quantidade = atualizarMedicamento.quantidade || dadosMedicamentos.Medicamento[idMedicamento].quantidade;

        salvarDadosMedicamentos(dadosMedicamentos);

        return res.json({ mensagem: "Medicamento atualizado com sucesso!" });
    }
});

server.delete("/medicamentos/:id", (req, res) => {
    const medicamentoId = parseInt(req.params.id);
    dadosMedicamentos.Medicamento = dadosMedicamentos.Medicamento.filter(m => m.id !== medicamentoId);
    salvarDadosMedicamentos(dadosMedicamentos);

    return res.status(200).json({ mensagem: "Medicamento excluído com sucesso" });
});

// Funções de salvamento de dados
function salvarDadosUsuarios() {
    fs.writeFileSync(__dirname + '/data/dados.json', JSON.stringify(dadosUsuarios, null, 2));
}

function salvarDadosMedicamentos() {
    fs.writeFileSync(__dirname + '/data/dadosMedicamentos.json', JSON.stringify(dadosMedicamentos, null, 2));
}

module.exports = { server, salvarDadosMedicamentos };

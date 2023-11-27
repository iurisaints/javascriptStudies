const express = require('express');
const server = express();
const dadosVendas = require('./data/dadosVendas.json'); // Novo arquivo para dados de vendas
const fs = require('fs');

server.use(express.json());

server.post('/vendas', (req, res) => {
    const novaVenda = req.body;

    if (!novaVenda.id || !novaVenda.data || !novaVenda.id_medicamento || !novaVenda.id_cliente) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente" });
    } else {
        dadosVendas.Venda.push(novaVenda);
        salvarDadosVendas(dadosVendas);
        return res.status(201).json({ mensagem: "Nova venda cadastrada com sucesso!" });
    }
});

server.get('/vendas', (req, res) => {
    return res.json(dadosVendas.Venda);
});

server.put('/vendas/:id', (req, res) => {
    const vendaId = parseInt(req.params.id);
    const atualizarVenda = req.body;
    const idVenda = dadosVendas.Venda.findIndex(v => v.id === vendaId);

    if (idVenda === -1) {
        return res.status(404).json({ mensagem: "Venda não encontrada :/" });
    } else {
        dadosVendas.Venda[idVenda].data = atualizarVenda.data || dadosVendas.Venda[idVenda].data;
        dadosVendas.Venda[idVenda].id_medicamento = atualizarVenda.id_medicamento || dadosVendas.Venda[idVenda].id_medicamento;
        dadosVendas.Venda[idVenda].id_cliente = atualizarVenda.id_cliente || dadosVendas.Venda[idVenda].id_cliente;

        salvarDadosVendas(dadosVendas);

        return res.json({ mensagem: "Venda atualizada com sucesso!" });
    }
});

server.delete("/vendas/:id", (req, res) => {
    const vendaId = parseInt(req.params.id);
    dadosVendas.Venda = dadosVendas.Venda.filter(v => v.id !== vendaId);
    salvarDadosVendas(dadosVendas);

    return res.status(200).json({ mensagem: "Venda excluída com sucesso" });
});

function salvarDadosVendas() {
    fs.writeFileSync(__dirname + '/data/dadosVendas.json', JSON.stringify(dadosVendas, null, 2));
}

module.exports = { server, salvarDadosVendas };

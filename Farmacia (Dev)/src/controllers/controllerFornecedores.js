const express = require('express');
const server = express();
const dadosFornecedores = require('./data/dadosFornecedores.json'); // Novo arquivo para dados de fornecedores
const fs = require('fs');

server.use(express.json());

server.post('/fornecedores', (req, res) => {
    const novoFornecedor = req.body;

    if (!novoFornecedor.id || !novoFornecedor.nome || !novoFornecedor.endereco || !novoFornecedor.telefone) {
        return res.status(400).json({ mensagem: "Dados incompletos, tente novamente" });
    } else {
        dadosFornecedores.Fornecedor.push(novoFornecedor);
        salvarDadosFornecedores(dadosFornecedores);
        return res.status(201).json({ mensagem: "Novo fornecedor cadastrado com sucesso!" });
    }
});

server.get('/fornecedores', (req, res) => {
    return res.json(dadosFornecedores.Fornecedor);
});

server.put('/fornecedores/:id', (req, res) => {
    const fornecedorId = parseInt(req.params.id);
    const atualizarFornecedor = req.body;
    const idFornecedor = dadosFornecedores.Fornecedor.findIndex(f => f.id === fornecedorId);

    if (idFornecedor === -1) {
        return res.status(404).json({ mensagem: "Fornecedor não encontrado :/" });
    } else {
        dadosFornecedores.Fornecedor[idFornecedor].nome = atualizarFornecedor.nome || dadosFornecedores.Fornecedor[idFornecedor].nome;
        dadosFornecedores.Fornecedor[idFornecedor].endereco = atualizarFornecedor.endereco || dadosFornecedores.Fornecedor[idFornecedor].endereco;
        dadosFornecedores.Fornecedor[idFornecedor].telefone = atualizarFornecedor.telefone || dadosFornecedores.Fornecedor[idFornecedor].telefone;

        salvarDadosFornecedores(dadosFornecedores);

        return res.json({ mensagem: "Fornecedor atualizado com sucesso!" });
    }
});

server.delete("/fornecedores/:id", (req, res) => {
    const fornecedorId = parseInt(req.params.id);
    dadosFornecedores.Fornecedor = dadosFornecedores.Fornecedor.filter(f => f.id !== fornecedorId);
    salvarDadosFornecedores(dadosFornecedores);

    return res.status(200).json({ mensagem: "Fornecedor excluído com sucesso" });
});

function salvarDadosFornecedores() {
    fs.writeFileSync(__dirname + '/data/dadosFornecedores.json', JSON.stringify(dadosFornecedores, null, 2));
}

module.exports = { server, salvarDadosFornecedores };

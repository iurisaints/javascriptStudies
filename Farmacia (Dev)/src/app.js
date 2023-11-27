const express = require('express');
const medicamentosRouter = require('./controllers/controllerMedicamentos');
const fornecedoresRouter = require('./controllers/controllerFornecedores');
const vendasRouter = require('./controllers/controllerVendas');
const clientesRouter = require('./controllers/controllerClientes');
const cors = require('cors');

const app = express();
app.use(cors()); // Adicione esta linha para configurar o CORS

app.use('/api', medicamentosRouter.server); // '/api/medicamentos'
app.use('/api', fornecedoresRouter.server); // '/api/fornecedores'
app.use('/api', vendasRouter.server); // '/api/vendas'
app.use('/api', clientesRouter.server); // '/api/clientes'

app.listen(3000, () => {
    console.log('O servidor está funcionando! :D');
});

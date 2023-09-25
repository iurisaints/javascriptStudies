// Função para ler os pedidos do servidor
function lerPedidos() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/pedidos', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const pedidos = JSON.parse(xhr.responseText);
        exibirPedidos(pedidos);
      } else {
        console.error('Erro:', xhr.status);
      }
    };
    xhr.send();
  }
  
  // Função para enviar um novo pedido para o servidor
  function enviarPedido(item, quantidade) {
    const novoPedido = { item, quantidade };
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/pedidos', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 201) {
        console.log('Pedido adicionado com sucesso!');
        lerPedidos(); // Atualizar a exibição dos pedidos após adicionar um novo pedido
      } else {
        console.error('Erro:', xhr.status);
      }
    };
    xhr.send(JSON.stringify(novoPedido));
  }
  
  // Função para exibir os pedidos na página
  function exibirPedidos(pedidos) {
    const pedidosContainer = document.getElementById('pedidos-container');
    pedidosContainer.innerHTML = '';
  
    pedidos.forEach(pedido => {
      const pedidoItem = document.createElement('div');
      pedidoItem.classList.add('pedido-item');
  
      const pedidoNome = document.createElement('p');
      pedidoNome.textContent = `Item: ${pedido.item}`;
  
      const pedidoQuantidade = document.createElement('p');
      pedidoQuantidade.textContent = `Quantidade: ${pedido.quantidade}`;
  
      pedidoItem.appendChild(pedidoNome);
      pedidoItem.appendChild(pedidoQuantidade);
  
      pedidosContainer.appendChild(pedidoItem);
    });
  }
  
  // Função para lidar com o envio do formulário
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const itemInput = document.getElementById('item');
    const quantidadeInput = document.getElementById('quantidade');
  
    const item = itemInput.value;
    const quantidade = parseInt(quantidadeInput.value);
  
    if (item && quantidade) {
      enviarPedido(item, quantidade);
      itemInput.value = '';
      quantidadeInput.value = '';
    }
  }
  
  // Registrar o evento de envio do formulário
  const pedidoForm = document.getElementById('pedido-form');
  pedidoForm.addEventListener('submit', handleFormSubmit);
  
  // Carregar os pedidos iniciais ao carregar a página
  lerPedidos();
  